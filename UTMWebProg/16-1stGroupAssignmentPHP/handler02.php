<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form</title>
</head>
<?php
    $strHeading = "<h1>Hello " . $_POST["username"]."</h1>";
    $colorType = $_POST["color"];

    switch($colorType){
        case "r":
        $strBackgroundColor = "rgb(255,0,0)";
        break;
        case "g":
        $strBackgroundColor = "rgb(0,255,0)";
        break;
        case "b":
            $strBackgroundColor = "rgb(0,0,255)";
        break;
        
        default:
        $strBackgroundColor = "rgb(200,200,200)";
        echo "<h3>Please select your color</h3>";
    break;
    }    
    ?>

<body style="background: <?php echo $strBackgroundColor; ?>;">
<?php echo $strHeading;?>
</body>
</html>