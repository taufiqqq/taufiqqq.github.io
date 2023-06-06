<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $con = mysqli_connect("localhost", "root", "");
    if(!$con){
        die('Could not connect: '.mysqli_error());
    }
    echo "Halo guys<br>";

/*      if (mysqli_query($con, "CREATE DATABASE my_db"))
    {
        echo "Database created";
    }
    else
    {
        echo "Error creating database: ". mysqli_error($con);
    }
  */
    mysqli_select_db($con, "my_db");

 /*    $sql = "CREATE TABLE Persons(
    FirstName varchar(15),
    LastName varchar(15),
    Age int
    )"; */

     $sql = "INSERT INTO Persons
     VALUES ('Taufiq', 'Kacak', 0165653191); "; 

    mysqli_query($con, $sql);

    mysqli_close($con);
    ?>
    
</body>
</html>