<?php 
include'vendor/autoload.php';
use StarFinder\Wiki ;

try{
   $wiki = new Wiki("Q4931639");
$id = $wiki->getImdbIds() ;
var_dump($id) ;

}catch(Exception $e){
   echo $e->getMessage();
}

