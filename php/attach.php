<?php
if (isset ($_POST['tel'])) {
  $to = "manager@inquarta.ru"; // поменять на свой электронный адрес
  $tel = $_POST['tel'];
  $subject = "Заявка с ".$_SERVER['HTTP_REFERER'];
  $message = "Имя: ".$_POST['name']."\nТелефон: ".$tel;
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $tel . "\r\n";
  $headers .= "Reply-To: " . $tel . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['files']['name']);$i++) {
     if(is_uploaded_file($_FILES['files']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['files']['tmp_name'][$i])));
         $filename = $_FILES['files']['name'][$i];
         $filetype = $_FILES['files']['type'][$i];
         $filesize += $_FILES['files']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
  }
}
?>