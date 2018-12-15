<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php
$linkFilesPath = 'linksFolder';

 $linkFiles = array_slice(scandir($linkFilesPath),2);
 foreach ($linkFiles as $linkFile => $file) 
   { 
    $data = file_get_contents($linkFilesPath . "\\" .$file);   
    $arrLinks = explode(";",$data);
    foreach($arrLinks as $link){
        if (mb_substr($link,-3)== "jpg"){
             echo "<a href=" . $link . " target=\"_blank\"> <img class = \"small\" src=" . $link ."></a>";
            }
       }    
    
   } 
      

?>

</body>
</html>
<?php

?>

