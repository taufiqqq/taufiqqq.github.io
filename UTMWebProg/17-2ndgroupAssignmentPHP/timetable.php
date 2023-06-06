<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    $minimum = $_POST["start"];
    $maximum = $_POST["end"];
    $multi = $_POST["multi"];

    for($i=$minimum; $i<=$maximum; $i++){
        $tempAns = $i*$multi;
        echo $i . " multiplied by " . $multi . " = " . $tempAns . "<br>";
    }
    ?>
    
    <h1>Times Table Multiply</h1>

    <?php
    echo "Your Start Number is : " . $minimum . "<br>";
    echo "Your End Number is : " . $maximum. "<br>";
    echo "Your Multiply By : " . $multi. "<br>";
    ?>
</body>
</html>