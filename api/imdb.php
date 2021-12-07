<?php
use function GuzzleHttp\json_encode;
include'vendor/autoload.php';
header('Content-Type: application/json');


if (isset ($_GET["mid"]) && preg_match('/^[0-9]+$/',$_GET["mid"])) {
  $send = array('Celeb'=>array(),'movies'=>array());
  $config = new \Imdb\Config();
  $config->language = 'en-US,en';
  $person = new \Imdb\Person($_GET["mid"],$config);
  $name = $person->name()  ;
  $Avatar=($person->photo() !=FALSE )?$person->photo():"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_.png";
  $birthday = $person->born();
  if (!empty($birthday)) {$birthday = $birthday['year'].'/'.$birthday['month'].'/'.$birthday['day'] ;}else{$birthday = "1900"; }
  $imdb_url = $person->main_url();
   $preson_array =array("name"=>$name,"avatar"=>$Avatar,"birthday"=>$birthday,"imdb_url"=>$imdb_url);
   array_push($send['Celeb'],$preson_array);

  /// Movies 
        $ff = array("director","actor");
        foreach ($ff as $var) {
          $fdt = "movies_$var";
          $filmo = $person->$fdt();
          if (!empty($filmo)) { ?>
 
                <?php foreach ($filmo as $film) { 
 
                $movie = new \Imdb\Title($film["mid"],$config);
                   if (($photo_url = $movie->photo() ) != FALSE) {
            $cov= $photo_url ;
          } else {
            $cov="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB470041619_.png";
          }
           $mov_name = $film['name'];
           $mov_year=$film['year'] ;
           $mov_char = (empty($film['chname']))?'Unknown character':$film['chname'];
           $mov_imdb_id = "tt".$film['mid'];
           $mov_array = array("name"=>$mov_name,"year"=>$mov_year,"char"=>$mov_char,"cover"=>$cov,"mov_id"=>$mov_imdb_id);
           array_push($send['movies'],$mov_array);
          }
        }
  
      }
    echo json_encode($send);
    
    } 
      
      ?>