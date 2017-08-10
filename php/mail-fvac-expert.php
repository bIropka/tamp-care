<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['fvac-expert-problem'])) {$problem = $_POST['fvac-expert-problem'];}
	if (isset($_POST['fvac-expert-name'])) {$name = $_POST['fvac-expert-name'];}
	if (isset($_POST['fvac-expert-phone'])) {$phone = $_POST['fvac-expert-phone'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "biropka@gmail.com";
	$sendfrom   = "tamp-care";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br><b>Client need HVAC expert </b> <br><b>Client`s problem:</b> $problem <br> <b>Client`s name:</b> $name <br><b>Client`s phone:</b> $phone";
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