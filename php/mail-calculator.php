<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['cost-name'])) {$name = $_POST['cost-name'];}
	if (isset($_POST['cost-phone'])) {$phone = $_POST['cost-phone'];}
	if (isset($_POST['install-property'])) {$property = $_POST['install-property'];}
	if (isset($_POST['install-system'])) {$system = $_POST['install-system'];}
	if (isset($_POST['install-footage-value'])) {$footage = $_POST['install-footage-value'];}
	if (isset($_POST['install-efficiency'])) {$efficiency = $_POST['install-efficiency'];}
	if (isset($_POST['budget-value-min'])) {$budgetMin = $_POST['budget-value-min'];}
	if (isset($_POST['budget-value-max'])) {$budgetMax = $_POST['budget-value-max'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "biropka@gmail.com";
	$sendfrom   = "tamp-care";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br>
 				<b>Client need installation cost </b> <br> 
 				<b>Client`s name: </b> $name <br>
 				<b>Client`s phone: </b> $phone <br>
 				<b>Type of property: </b> $property <br>
 				<b>Client wants to install: </b> $system <br>
 				<b>Square footage: </b> $footage <br>
 				<b>Desired efficiency level: </b> $efficiency <br>
 				<b>Budget minimum: </b> $budgetMin <br>
 				<b>Budget maximum: </b> $budgetMax <br> ";
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