<?php

namespace StarFinder;

use Aws\Rekognition\RekognitionClient;

class Rekognition
{
    private $errors = [], $file, $maxFileSizeInMB, $result;
    public $options;
    public function __construct()
    {
        $this->maxFileSizeInMB = 5;
    }
    public function setFile($file)
    {
        $this->file = $file;
    }
    public function SetMaxFileSize($sizeInMB): void
    {
        $this->maxFileSizeInMB = $sizeInMB;
    }

    public function json_response($response): string
    {
        return json_encode($response);
    }

    public function SendJsonHeader(): void
    {
        header('Content-Type: application/json');
    }
    public function setError($error): void
    {
        array_push($this->errors, $error);
        return;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }

    public function CheckFileSize(): bool
    {
        if ($this->file['size'] > ($this->maxFileSizeInMB * 1024 * 1024)) {
            $this->setError("File exceeds maximum size , max file size is $this->maxFileSizeInMB MB");
            return false;
        }
        return true;
    }

    public function CheckFileType(): bool
    {
        $imageFileType = strtolower(pathinfo($this->file['name'], PATHINFO_EXTENSION));
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"  || !getimagesize($this->file['tmp_name'])) {
            $this->setError("File type is not supported");
            return false;
        }
        return true;
    }

    protected function ReadFileInput(): string
    {
        $photo = $this->file["tmp_name"];
        $fp_image = fopen($photo, 'r');
        $image = fread($fp_image, filesize($photo));
        fclose($fp_image);
        return $image;
    }

    protected function GetImageBytes($image): string
    {
        return $this->ReadFileInput($image);
    }

    protected function RekognitionApi(): RekognitionClient
    {
        $rekognition = new RekognitionClient($this->options);
        return $rekognition;
    }

    public function Detect()
    {
        try {
            $image = $this->GetImageBytes($this->file);
            $response = $this->RekognitionApi()->recognizeCelebrities(
                [
                    'Image' => [
                        'Bytes' => $image
                    ]
                ]
            );
            $this->result = $response;

            return $response;
        } catch (\Exception $e) {
            $this->setError($e->getMessage()); 
        }
    }

    public function CelebrityCount()
    {
        return count($this->result->get('CelebrityFaces')) ?? 0;
    }

    public function GetCelebrityFaces()
    {
        return $this->result->get('CelebrityFaces') ?? [];
    }

    public function GetResult()
    {
        return $this->result;
    }

    protected function getSafeFile()
    {
        if (
            $this->CheckFileType() &&
            $this->CheckFileSize()
        ) {
            return $this->file;
        }
        return false;
    }
    public function getImdbUrls()
    {
        return $this->getResult()->search('CelebrityFaces[].Urls[?starts_with(@,`www.imdb.com\/name\/`)]');
    }

    public function getWikiUrls()
    {
        return $this->getResult()->search('CelebrityFaces[].Urls[?starts_with(@,`www.wikidata.org\/wiki\/`)]');
    }

    public function Detection($options, $checkFile = true, $errors = true)
    {
        $response = [];
        $this->options = $options;
        if ($checkFile) {
            $this->file = $this->getSafeFile();
        }
        if ($errors) {
            $response['errors'] = $this->getErrors();
        }
        if ($this->file) {
            $this->Detect();
            $response['faces_detected'] = $this->CelebrityCount();
            $response['data'] = $this->getCelebrityFaces();
            $response['imdb_urls'] = $this->getImdbUrls();
            $response['wiki_urls'] =  $this->getWikiUrls();
        }

        return $this->json_response($response);
    }
}
