<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
Welcome <?php
$name = $_POST["name"];
echo $name; //save in variable
?><br>
Your email address is <?php
echo $_POST["email"];
?>
</body>
</html>