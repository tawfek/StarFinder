<?php
require 'vendor/autoload.php';
use StarFinder\Authentication;
use StarFinder\Rekognition;

$auth = new Authentication;
$auth->setAccessKeyId("AKIAZIBSKEIWRJBNYYNS");
$auth->setSecretAccessKey("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");

$credentials = $auth->auth();
$options = $auth->getOptions();

$api = new Rekognition();
// $api->sendJsonHeader();

if (isset($_FILES['celebimage'])) {
    $api->setFile($_FILES['celebimage']);
    $response = $api->Detection($options);
    $errors = $api->getErrors() ;
    if($errors){
    echo $api->json_response(["errors" => $errors]);
    }else{
    echo $response ;
    }
} else {
    $api->setError("No file selected");
    echo $api->json_response(["errors" => $api->getErrors()]);
}

