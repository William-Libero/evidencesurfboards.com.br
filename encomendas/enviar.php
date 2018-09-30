<?php
//Variáveis
 
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$cep = $_POST['cep'];
$endereco = "<b>Estado:</b> " . $_POST['estado'] . " <b>Cidade:</b> " . $_POST['cidade'] . "<br> <b>Rua:</b> " . $_POST['rua'] . " <b>Número</b>: " . $_POST['numero'] . " <b>Bairro:</b> " . $_POST['bairro'] . " <b>Complemento:</b> " . $_POST['complemento'];
$bloco = $_POST['bloco'];
$tamanho = $_POST['tamanho'] . $_POST['tamanho-pol'];
$largura = $_POST['largura'] . " " . $_POST['largurafracao'];
$flutuacao = $_POST['flutuacao'] . " " . $_POST['flutuacaofracao'];
$rabeta = $_POST['rabeta'] . " Entrada: " . $_POST['entradaprancha'];
$quilhas = $_POST['quilhas'] . " Modelo: " . $_POST['modeloquilha'];
$fundo = $_POST['fundo'];
$canaletas = $_POST['canaletas'];
$borda = $_POST['borda'];
$pintura = $_POST['pintura'];
$pinturaSelecionada = $_POST['imgselecionada'];
if($pinturaSelecionada != 'undefined' || $pinturaSelecionada != null){
    $pinturaSelecionada = 'https://evidencesurfboards.000webhostapp.com/encomendas/' . $pinturaSelecionada;
}
if($pintura == 'branca'){
    $pinturaSelecionada = 'https://evidencesurfboards.000webhostapp.com/encomendas/images/pinturaBranca.jpeg';
}
$destino = 'uploads/';
$pinturaEnviada = $destino . $_FILES['arquivo'] ['name'];
if(move_uploaded_file($_FILES['arquivo']['tmp_name'], $pinturaEnviada)){
    $pinturaSelecionada = 'https://evidencesurfboards.000webhostapp.com/encomendas/' . $pinturaEnviada;
    
}
$acabamento = $_POST['acabamento'];
$mensagem = $_POST['mensagem'];
date_default_timezone_set('America/Sao_Paulo');
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

// Compo E-mail
  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #000;
  }
  a{
  color: #000;
  text-decoration: none;
  }
  a:hover {
  color: #000;
  text-decoration: none;
  }
  </style>
  
    <html>
        <body style='margin: 0px; padding: 0px; font-family: Lato, sans-serif;'>
        	<div class='cabecalho-email' style='float:left; width:450px; height:120px; background-color:#2C84CC; text-align: center;'>
        	    <img  href='#' style='margin-left: 70px;float:left; clear:left; width: 240px; height: 80px; background-size: contain;' src='https://evidencesurfboards.000webhostapp.com/encomendas/images/logo-site.png'/><br/>
        	    <h3 style='margin-left: 70px; float: left; clear: both;'>Você recebeu uma nova encomenda!</h3>
        	</div>
        	<div class='dados email' style='float:left; clear:both; width:450px; height:auto; background-color:#EAEAEA;'>
        		<h3  style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Nome do cliente: $nome</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Email do cliente: $email</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Telefone do cliente: $telefone</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Endereço do cliente:<br> Cep - $cep <br> $endereco</h3>
            <h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Bloco da prancha: $bloco</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Tamanho da prancha: $tamanho</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Flutuação da prancha: $flutuacao</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Rabeta da prancha: $rabeta</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Quilhas da prancha: $quilhas</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Fundo da prancha: $fundo</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Canaleta da prancha: $canaletas</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Borda da prancha: $borda</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Pintura da prancha: $pintura</h3>
        		
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Modelo da pintura:  </h3>
        		<div style='width:270px; height:500px;' class='pinturaSelecionada'><img style='width:270px; height:500px; margin-left: 70px;' class='img-slide' src='$pinturaSelecionada'>
        		</div>
        		
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Acabamento da prancha: $acabamento</h3>
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Mensagem: $mensagem</h3><br/>
        
        		<h3 style='margin-left: 70px;color:#000;  font-family: Lato, sans-serif;'>Data de envio: <b>$data_envio</b> ás <b>$hora_envio</b></h3>
        	</div>
        </body>
    </html>
  ";

  //enviar
   
  // emails para quem será enviado o formulário
  $emailenviar = "williamliberos@gmail.com";
  $destino = $emailenviar;
  $assunto = "Você recebeu uma nova encomenda!";
 
  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From:' . $nome . " " . $email;
   
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário.";
  echo "<meta http-equiv='refresh' content='0;URL=encomendasenvio.html'>";
  } else {
  $mgm = "ERRO AO ENVIAR E-MAIL!";
  echo $mgm;
  }
?>