<?php
include'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;
define('API_KEY','KEY') ;
define('API_SECRET','SECRET')  ;
try{
    $credentials = new Aws\Credentials\Credentials(
        API_KEY, 
        API_SECRET);

    $options =[
        'version'     => 'latest',
        'region'      => 'us-west-2',
        'credentials' =>$credentials,'http' => [ 'verify' => false ] 
    ] ;
// $client = new S3Client($options);

}catch(Exception $e){
    echo $e ;
}
?>