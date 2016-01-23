<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];



$email_from = 'andreitalpos@yahoo.com';
$email_subject = 'New Form Submission';
$email_body = '$name. has sent youa email from your webiste \n\r $message' ;



$to = 'andreitalpos@yahoo.com';
$headers = 'From: $email_from \n';
$headers = 'Reply-To: $visitor_email \n';

if(mail($to, $email_subject, $email_body, $headers)){
	$response = 'Your mail has been successfully sent.';
} else {
	$response = 'Opps there was a problem submitting your mail. Please try again later.';
}

echo $response;