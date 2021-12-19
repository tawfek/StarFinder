<?php
require_once './vendor/autoload.php';

use StarFinder\StarFinder;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../');
$dotenv->load();
sendJsonHeader();
$api = new StarFinder ;
if (isset($_GET['rekognition'])) {
    try {
        echo $api->Rekognition(
            $_ENV['AWS_ACCESS_KEY_ID'],
            $_ENV['AWS_SECRET_ACCESS_KEY'],
            "img"
        );
    } catch (\Exception $e) {
        echo json_response(["errors" => $e->getMessage()]);
    }
}

if (isset($_GET['wiki'])) {
    try {
        echo $api->getPersonFullInformationFromWiki($_GET['wiki']);
    } catch (\Exception $e) {
        echo json_response(["errors" => $e->getMessage()]);
    }
}

if (isset($_GET['mid'])) {
    try {
        echo $api->getPersonFullInformation($_GET['mid']);
    } catch (\Exception $e) {
        echo json_response(["errors" => $e->getMessage()]);
    }
}
