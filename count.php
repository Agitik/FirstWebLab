<?php
 $canBeX = isset($_POST["xCord"]) ? in_array($_POST["xCord"], array(-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2)) : false;
 $canBeR = isset($_POST["rParametr"]) ? in_array($_POST["rParametr"], array(1, 2, 3, 4, 5)) : false;
 $canBeY = isset($_POST["yCord"]) ? $_POST["yCord"] > -5 && $_POST["yCord"] < 3 : false;
 $scriptStarted = microtime(true);
   date_default_timezone_set('Europe/Moscow');
 function isInGrid($x, $y, $r){
     $inRound = (($x*$x)+($y*$y)==($r*$r))&&((($y<$r)&&($y>0))&&(($y<$r)&&($y>0)));
     $inSquare = (($x > (-$r))&&($y < $r)&&($y > 0));
     $inTriangle = ((($x>0)&&($y>0))&&($x < (($y*$r)/(-$r/2))&&(($x*(-($r/2)))/($r))));
     return $inRound||$inSquare||$inTriangle;
   }
   if($canBeX && $canBeY && $canBeR){
       if (isset($_POST["xCord"]) && isset($_POST["yCord"]) && isset($_POST["rParametr"])){
           $xCord = $_POST["xCord"];
           $yCord = $_POST["yCord"];
           $rParametr = $_POST["rParametr"];
           $startTime = date('H:i:s');
           $result = isInGrid($_POST["xCord"], $_POST["yCord"], $_POST["rParametr"])?"true":"false";
           $time = sprintf('%.5F', (microtime(true) - $scriptStarted)*1000);
           $answer = "$startTime"."&"."$xCord"."&"."$yCord"."&"."$rParametr"."&"."$time"."&"."$result";
           echo $answer;
       } else {
           echo "Ошибка со стороны сервера!";
       }
   } else {
       echo "Получены некорректные параметры!";
   }
?>
