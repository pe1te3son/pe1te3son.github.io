<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = trim(filter_input(INPUT_POST, "senderName", FILTER_SANITIZE_STRING));
  $email = trim(filter_input(INPUT_POST, "emailAddress", FILTER_SANITIZE_EMAIL));
  $message = trim(filter_input(INPUT_POST, "senderMsg", FILTER_SANITIZE_SPECIAL_CHARS));

  if($name == "" || $email == "" || $message == ""){
    $error_message = "Please fill required fields: Name, Email, Category and Title";

  }
  if(!isset($error_message) && $_POST["adrress"] != ""){
    $error_message = "Bad form input";

  }

  require("class.phpmailer.php");

  $mail = new PHPMailer;

  if(!isset($error_message) && !$mail->ValidateAddress($email)){ //if error_message not true and email validation not true
    $error_message = "Invalid Email address";
  };

if(!isset($error_message)){
    $email_body = "";
    $email_body .= "Name " . $name . "\n";
    $email_body .= "Email " . $email . "\n";
    $email_body .= "Message " . $details . "\n";

    $mail->setFrom($email, $name);
    $mail->addAddress('pe1te3son@ymail.com', 'peter');     // Add a recipient
                                                          // Name is optional
    $mail->isHTML(false);                                  // Set email format to HTML

    $mail->Subject = 'Personal media libary suggest page from '. $name;
    $mail->Body    = $email_body;


    if($mail->send()) {
    ?>
    <script type="text/javascript">
      $('#form-feedback-cont').append('<h3>Thank You!</h3><p>You message has been sent.</p>').addClass('success-msg');
    </script>
    <?php
    }

    $error_message = 'Message could not be sent.';
    $error_message .= 'Mailer Error: ' . $mail->ErrorInfo;
    ?>
    <script type="text/javascript">
      $('#site-form').prepend('hey');
    </script>
    <?php
  }
}


?>
