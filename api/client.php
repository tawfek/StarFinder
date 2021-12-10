<?php
include'vendor/autoload.php';
use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;
use Aws\credentials\Credentials as auth ;
define('ACCESS_KEY_ID','AKIAZIBSKEIWRJBNYYNS') ;
define('SECRET_ACCESS_KEY','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')  ;
try{
    $credentials = new auth(ACCESS_KEY_ID, SECRET_ACCESS_KEY);
    $options =[
        'version'     => 'latest',
        'region'      => 'eu-central-1',
        'credentials' =>$credentials,'http' => [ 'verify' => false ] 
    ] ;


}catch(Exception $e){
    echo $e->getMessage() ;
}
?>