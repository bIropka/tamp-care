<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['request-service-name'])) {$name = $_POST['request-service-name'];}
	if (isset($_POST['request-service-phone'])) {$phone = $_POST['request-service-phone'];}
	if (isset($_POST['request-service-email'])) {$email = $_POST['request-service-tel'];}
	if (isset($_POST['request-service-address'])) {$address = $_POST['request-service-address'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "biropka@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
	$sendfrom   = "tamp-care"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br><b>Client need consultation </b> <br> <b>Client`s name:</b> $name <br><b>Client`s phone:</b> $phone <br><b>Client`s email:</b> $email <br><b>Client`s address:</b> $address";
	$send = mail ($to, $subject, $message, $headers);
	if ($send == 'true')
	{
		echo '<p class="success">Спасибо за обращение к нам!</p>';
	}
	else
	{
		echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
	}
} else {
	http_response_code(403);
	echo "Попробуйте еще раз";
}
?>