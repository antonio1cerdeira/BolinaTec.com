<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Substitua com o seu email real
  $receiving_email_address = 'no-reply@bolinatec.com';  // Use seu email real

  // Carregar a biblioteca PHP Email Form
  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  // Sanitização e validação dos dados do formulário
  $name = htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8');
  $email = htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8');
  $subject = htmlspecialchars($_POST['subject'] ?? '', ENT_QUOTES, 'UTF-8');
  $message = htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8');

  // Validação de campos obrigatórios
  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    die('Todos os campos são obrigatórios.');
  }

  // Validação do formato de email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      die('Email inválido.');
  }

  // Verificação do reCAPTCHA
  $recaptcha_secret = '6LdcAP0qAAAAAN33bT1AFW-0VbKXpJiHjsp4b5Bo';
  $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';
  
  if (!$recaptcha_response) {
    die('Erro: reCAPTCHA não foi preenchido.');
  }

  $verify_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$recaptcha_secret.'&response='.$recaptcha_response);
  $response_keys = json_decode($verify_response, true);
  
  if(empty($response_keys["success"]) || !$response_keys["success"]) {
    die('Erro de verificação do CAPTCHA. Tente novamente.');
  }

  // Criar o objeto de envio de email
  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  $contact->to = $receiving_email_address;
  $contact->from_name = $name;
  $contact->from_email = $email;
  $contact->subject = $subject;

  $contact->add_message($name, 'Nome');
  $contact->add_message($email, 'Email');
  $contact->add_message($message, 'Mensagem', 10);

  // Envio do formulário e resposta ao usuário
  if ($contact->send()) {
    echo 'Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.';
  } else {
    echo 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.';
  }
?>