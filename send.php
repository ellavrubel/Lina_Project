<html>
<head>
    <title>Форма заявки с сайта</title>
</head>
<body>
<?php

if(!isset($_POST['name']) and !isset($_POST['email'])){
    ?> <form action="send.php" method="post">
        <input type="text" name="name"  placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="submit" value="SEND MASSAGE">
    </form> <?php
} else {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $name = urldecode($name);
    $email = urldecode($email);
    $name = trim($name);
    $email = trim($email);
    if (mail("ella.vrubel@yandex.ru", "Name:".$name.". E-mail: ".$email ,"From: info@webella.ru \r\n")){
        echo "message sent";
    } else {
        echo "something went wrong";
    }
}
?>
</body>
</html>