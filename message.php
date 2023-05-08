<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if (!empty($email) && !empty($name)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $reciever = "mhlsamine@gmail.com";
        $subject = "Form: $name <$email>";
        $body = "Name: $name\nEmail: $email\nMessage: $message\n\nRegards,\n$name";
        $headers = "From: $email";
        if (mail($reciever, $subject, $body, $headers)) {
            echo "Your message has been sent";
        } else {
            echo "Sorry! Failed to send your message.";
        }
    } else {
        echo "Enter a valid email address!";
    }
} else {
    echo "Fields are required!";
}
?>