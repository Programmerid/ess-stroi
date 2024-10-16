<?php
if (isset($_POST['subj'])) {$subj = $_POST['subj'];}
if (isset($_POST['text'])) {$name = $_POST['text'];}
if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
if (isset($_POST['mail'])) {$tel = $_POST['mail'];}
if (isset($_POST['lizing'])) {$tel = $_POST['lizing'];}

$address  = 'ecc.sales@yandex.ru';
$mes = "Тема: $subj\nИмя: $name\nТелефон: $tel";   
$sub='Форма обратной связи с сайта ЕСС'; 
$email='yess.service@yandex.ru'; 

//$send = mail($address, $sub, $mes, "Content-type:text/plain; charset=utf-8\r\nFrom:$email");
$send = mail($address, $sub, $mes, "Content-type:text/plain; charset=utf-8\r\n");

if ($send) {
    echo 'Письмо успешно отправлено';
} else {
    echo 'Произошла ошибка при отправке письма';
}
?>