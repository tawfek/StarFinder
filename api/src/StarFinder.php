<?php

namespace StarFinder;

use StarFinder\Authentication;
use StarFinder\Rekognition;
use StarFinder\imdb;
use StarFinder\Wiki;

class StarFinder
{

    public function __construct($useCors = true)
    {
        if ($useCors) {
            AllowCors();
        }
    }
    public function getImdbIdFromWiki($wikiUrl)
    {
        $wiki = new Wiki($wikiUrl);
        return json_response($wiki->getResponse());
    }

    public function getPersonInformation($imdbUrlOrId)
    {
        $person = new imdb($imdbUrlOrId);
        return json_response($person->getPersonInformation());
    }

    public function getPersonInformationFromWiki($wikiUrl)
    {
        $wiki = new Wiki($wikiUrl);
        $response = $wiki->getResponse();
        if ($response['status'] == "sucess") {
            return $this->getPersonInformation($response['imdb_id']);
        }
        return false;
    }

    public function getPersonFullInformationFromWiki($wikiUrl)
    {
        $wiki = new Wiki($wikiUrl);
        $response = $wiki->getResponse();
        if ($response['status'] == "sucess") {
            return $this->getPersonFullInformation($response['imdb_id']);
        }
        return false;
    }

    public function getPersonFullInformation($imdbUrlOrId)
    {
        $person = new imdb($imdbUrlOrId);
        return json_response($person->getPersonFullInformation());
    }

    public function getPersonMovies($imdbUrlOrId)
    {
        $person = new imdb($imdbUrlOrId);
        return json_response($person->getPersonMovies());
    }

    public function Rekognition($access_key, $secret_access_key, $file_input_name = "celebimage")
    {
        $api = new Rekognition();
        if (isset($_FILES[$file_input_name])) {
            $auth = new Authentication;
            $auth->setAccessKeyId($access_key);
            $auth->setSecretAccessKey($secret_access_key);
            $credentials = $auth->auth();
            $options = $auth->getOptions();

            $api->setFile($_FILES[$file_input_name]);
            $response = $api->Detection($options);
            $errors = $api->getErrors();
            if ($errors) {
                return json_response(["errors" => $errors]);
            } else {
                return json_response($response);
            }
        } else {
            $api->setError("No file selected");
            return json_response(["errors" => $api->getErrors()]);
        }
    }
}
