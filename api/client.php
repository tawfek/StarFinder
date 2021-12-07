<?php
include'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;
try{
    $credentials = new Aws\Credentials\Credentials('AKIAQXPQ76OVPNQMUJFT', 'WGylWSTwnww8sTzQDnEzwvFlntb9GicSGOSpYNkY');

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