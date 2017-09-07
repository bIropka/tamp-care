<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['gifts-name'])) {$name = $_POST['gifts-name'];}
	if (isset($_POST['gifts-phone'])) {$phone = $_POST['gifts-phone'];}
	if (isset($_POST['gifts-gift'])) {$gift = $_POST['gifts-gift'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "sereda.maksim95@gmail.com";
	$sendfrom   = "tamp-care";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br><b>Client won a gift! </b> <br>
  				<b>Client`s name:</b> $name <br>
  				<b>Client`s phone:</b> $phone <br>
  				<b>Client`s gift:</b> $gift";
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