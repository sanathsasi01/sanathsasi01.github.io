<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "sanathsasi01@gmail.com";
$subject = "Mail From Porfolio";
// $txt ="Name : ". $name . "\r\n  Email : " . $email . "\r\n Message :" . $message;
$email_body = "You have received an email from " .$name. ".\n\n" .$message;
$headers = "From: " .$email;
if($email!=NULL){
    $mail =  mail($to,$subject,$email_body,$headers);
    echo $mail;
}
//redirect
// header("Location:thankyou.html");
?>