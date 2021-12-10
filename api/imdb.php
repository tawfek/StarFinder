<?php
include'vendor/autoload.php';
use StarFinder\imdb ;

$id = $_GET['mid'] ?? 0 ;
$imdb = new imdb($id) ;
if($id){
   $id = $imdb->getId() ;
   try{
$avatar = $imdb->getPersonFullInformation() ;
var_dump($avatar) ;
   }catch(Exception $e){
      echo $e->getMessage();
   }
}
