<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['cost-name'])) {$name = $_POST['cost-name'];}
	if (isset($_POST['cost-phone'])) {$phone = $_POST['cost-phone'];}
	if (isset($_POST['cost-email'])) {$email = $_POST['cost-email'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "sereda.maksim95@gmail.com";
	$sendfrom   = "tamp-care";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br><b>Client need installation cost </b> <br> <b>Client`s name:</b> $name <br><b>Client`s phone:</b> $phone <br><b>Client`s email:</b> $email";
	$send = mail ($to, $subject, $message, $headers);
	if ($send == 'true')
	{
		echo '<p class="success">Success!</p>';
	}
	else
	{
		echo '<p class="fail"><b>Error!</b></p>';
	}
} else {
	http_response_code(403);
	echo "try again";
}
?>