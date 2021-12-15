<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "sanathsasi01@gmail.com";
$subject = "Mail From website";
// $txt ="Name : ". $name . "\r\n  Email : " . $email . "\r\n Message :" . $message;
$email_body = "You have received an email from " .$name. ".\n\n" .$message;
$headers = "From: " .$email;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>