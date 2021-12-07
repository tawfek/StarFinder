<?php
include'vendor/autoload.php';
error_reporting(0);
include'cors.php';
include 'client.php';
use Aws\Rekognition\RekognitionClient;
use function GuzzleHttp\Promise\exception_for;
use Aws\S3\Exception\S3Exception;
use function GuzzleHttp\json_encode;
use function GuzzleHttp\json_decode;
$upok =1 ;
$error = '' ;
header('Content-Type: application/json');
// die('{"status":"success","CountCelebs":2,"celebs":[{"celeb":{"imdb_url":"www.imdb.com\/name\/nm0425005","name":"Dwayne Johnson","Confidence":100,"width":0.16461916267871857,"height":0.11047463119029999,"Top":0.06382978707551956,"Left":0.5466830730438232}},{"celeb":{"imdb_url":"www.imdb.com\/name\/nm0366389","name":"Kevin Hart","Confidence":100,"width":0.14004914462566376,"height":0.09328968822956085,"Top":0.24140752851963043,"Left":0.1928746998310089}}]}');
$options = $options;
if(!isset($_FILES) || !isset($_FILES["celebimage"]) || $_SERVER['REQUEST_METHOD']!=="POST"){
    $error = 'An unexpected error ';
   $upok =0 ;
}else{
if ($_FILES["celebimage"]["size"] > 5000000) {
   $error = 'File size must be smaller then 5MB';
    $upok = 0;
}

$imageFileType = strtolower(pathinfo($_FILES["celebimage"]['name'],PATHINFO_EXTENSION));

if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" ) {
    $error=  "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $upok = 0;
}
$check = getimagesize($_FILES["celebimage"]["tmp_name"]);
if($check== false) {
   $error = 'File is not an image';
   $upok= 0;
}
}
if($upok===0){
$ar = array("status"=>"error",'message'=>$error);
echo json_encode($ar) ;
}else{
try{
$rekognition = new RekognitionClient($options);

// Get local image
// $photo = 'two.jpg';
$photo = $_FILES["celebimage"]["tmp_name"];
$fp_image = fopen($photo, 'r');
$image = fread($fp_image, filesize($photo));
fclose($fp_image);


// Call DetectFaces
$result = $rekognition->recognizeCelebrities(
   [
      'Image' => [
      'Bytes' => $image
      ]]
);

// Display info for each detected person 
   $actors = ['status'=>'success','CountCelebs'=>sizeof($result['CelebrityFaces']),'celebs'=>array()];
   // print_r($result);
   for($i=0;$i<sizeof($result['CelebrityFaces']);$i++){
      $imdb = (isset($result['CelebrityFaces'][$i]['Urls'][0]))?$result['CelebrityFaces'][$i]['Urls'][0]:'';
      $name = (isset($result['CelebrityFaces'][$i]['Name']))?$result['CelebrityFaces'][$i]['Name']:'Unknown';
      $Confidence = (isset($result['CelebrityFaces'][$i]['MatchConfidence']))?$result['CelebrityFaces'][$i]['MatchConfidence']:'0';
      $width = (isset($result['CelebrityFaces'][$i]['Face']['BoundingBox']['Width']))?$result['CelebrityFaces'][$i]['Face']['BoundingBox']['Width']:'0';
      $height = (isset($result['CelebrityFaces'][$i]['Face']['BoundingBox']['Height']))?$result['CelebrityFaces'][$i]['Face']['BoundingBox']['Height']:'0';
      $Left = (isset($result['CelebrityFaces'][$i]['Face']['BoundingBox']['Left']))?$result['CelebrityFaces'][$i]['Face']['BoundingBox']['Left']:'0';
      $Top = (isset($result['CelebrityFaces'][$i]['Face']['BoundingBox']['Top']))?$result['CelebrityFaces'][$i]['Face']['BoundingBox']['Top']:'0';
      $ar= array('celeb'=>array('imdb_url'=>$imdb,'name'=>$name,'Confidence'=>$Confidence,'width'=>$width,'height'=>$height,'Top'=>$Top,'Left'=>$Left));
   array_push($actors['celebs'],$ar); 

   }

 
}catch(Exception $e){
   $actors = ['status'=>'error','message'=>$e->getMessage()];


}
print_r(json_encode($actors,true));
}


?>