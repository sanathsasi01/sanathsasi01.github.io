<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "sanathsasi01@mail.com";
$subject = "Mail From website";
$txt ="Name : ". $name . "\r\n  Email : " . $email . "\r\n Message :" . $message;
$headers = "From: sanathzewia@gmail.com"
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>