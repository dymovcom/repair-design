<?php

$userName     = $_POST['userName'];
$userEmail    = $_POST['userEmail'];
$userPhone    = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];

$massage = "<html>
                <body>
                    <p>Новая заявка с Repair Design</p>
                    <p>Имя: $userName</p>
                    <p>Телефон: $userPhone</p>                      
                    ";
if (isset($userEmail)) {
    $massage .=     "<p>E-mail: $userEmail</p>";
} 
if (isset($userQuestion)) {
    $massage .=     "<p>Вопрос: $userQuestion</p>";
}
$massage .=     "</body>
            </html>";


// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'dymovanton31@gmail.com';                     // SMTP username
    $mail->Password   = 'q12453912';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('dymovanton31@gmail.com');
    $mail->addAddress('dymovcom@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    // $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";

    $mail->Body = $massage; //Текст нащего сообщения можно использовать HTML теги

    if ($mail->send()) {
        // echo "ok";
        header('Location: thanks.html');
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}