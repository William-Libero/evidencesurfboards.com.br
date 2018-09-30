var form =	document.forms['form-encomenda'];

function verificaNome(){
	var nome = 	form.nome.value;
	var controlSpace = nome.indexOf(" ");

	if(controlSpace < 3 || isNaN(nome)==false){
		$(".success-alert-nome").css("display","none");
		$(".name .image-positioned").css("display","block");
		$(".name .msg-alert-nome").css("display","block");
		$(form[name='nome']).css("border","1px solid #BE4B49");
	}else if (controlSpace >= 3 && isNaN(nome)==true){
		$(".name .image-positioned").css("display","none");
		$(".name .msg-alert-nome").css("display","none");
		$(".name .success-alert-nome").css("display","block");
		$(form[name='nome']).css("border","1px solid black");	
	}
}

function verificaEmail(){
	var email = 	form.email.value;
	var controlSpace = email.indexOf("@");
	var controlSpace1 = email.indexOf(".com");

	if(controlSpace < 5 || controlSpace1 < 8){
		$(".success-alert-nome").css("display","none");
		$(".email .image-positioned").css("display","block");
		$(".email .msg-alert-nome").css("display","block");
		$(form[name='email']).css("border","1px solid #BE4B49");
		console.log(controlSpace);
	}else if (controlSpace >= 5 && controlSpace1 >= 8){
		$(".email .image-positioned").css("display","none");
		$(".email .msg-alert-nome").css("display","none");
		$(".email .success-alert-nome").css("display","block");
		$(form[name='email']).css("border","1px solid black");
	}
}

function verificaTelefone(){
	var telefone = 	form.telefone.value;
	var controlSpace = telefone.indexOf("(");

	if(telefone.length < 10 || telefone.length >= 18){
		$(".success-alert-nome").css("display","none");
		$(".telefone .image-positioned").css("display","block");
		$(".telefone .msg-alert-nome").css("display","block");
		$(form[name='telefone']).css("border","1px solid #BE4B49");		
		document.querySelector('.telefone .form-name').value =  "";
	}else if (telefone.length >= 10 && telefone.length <= 18){
		$(".telefone .image-positioned").css("display","none");
		$(".telefone .msg-alert-nome").css("display","none");
		$(".telefone .success-alert-nome").css("display","block");
		$(form[name='telefone']).css("border","1px solid black");
		if(controlSpace === -1 && telefone.length ){
			var formataCampo = "("+ telefone[0] + telefone[1] +") " + telefone.substr(2,5) + " - " + telefone.substr(7,10);
			document.querySelector('.telefone .form-name').value = formataCampo;
		}
	}
}

function verificaCEP(){
	var cep = 	form.cep.value;
	var controlSpace = cep.indexOf("-");

	if(cep.length < 8 || cep.length > 9 || controlSpace != -1 && controlSpace != 5){
		$(".cep .success-alert-nome").css("display","none");
		$(".cep .image-positioned").css("display","block");
		$(".cep .msg-alert-nome").css("display","block");
		$(form[name='cep']).css("border","1px solid #BE4B49");
	}else if (controlSpace == 5 || cep.length <= 9){
		$(".cep .image-positioned").css("display","none");
		$(".cep .msg-alert-nome").css("display","none");
		$(".cep .success-alert-nome").css("display","block");
		$(form[name='cep']).css("border","1px solid black");
		if(cep.indexOf("-") == -1){
			var formataCampo = cep.substr(0,5) + "-" + cep.substr(5,7);
			document.querySelector('.cep .form-name').value = formataCampo;
		}
		$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
	        if (!("erro" in dados)) {
	            //Atualiza os campos com os valores da consulta.
	            $('#rua').val(dados.logradouro);
	            $("#bairro").val(dados.bairro);
	            $("#cidade").val(dados.localidade);
	            $("#estado").val(dados.uf);
	            $('#cidade').disabled = 'true';
	        }
	    });
	}
}

function verificaEndereco(){
	var endereco = 	form.endereco.value;
	var controlSpace = endereco.indexOf("@");
	var controlSpace1 = endereco.indexOf(".com");

	if(controlSpace < 5 || controlSpace1 < 8){
		$(".endereco .success-alert-nome").css("display","none");
		$(".endereco .image-positioned").css("display","block");
		$(".endereco .msg-alert-nome").css("display","block");
		$(form[name='endereco']).css("border","1px solid #BE4B49");
		console.log(controlSpace);
	}else if (controlSpace >= 5 && controlSpace1 >= 8){
		$(".endereco .image-positioned").css("display","none");
		$(".endereco .msg-alert-nome").css("display","none");
		$(".endereco .success-alert-nome").css("display","block");
		$(form[name='endereco']).css("border","1px solid black");
	}
}

////////////////////// VERIRICA A OPÇÃO DE PINTURA SELECIONADA PELO CLIENTE
////////////////////// (SEM PINTURA(BRANCA) OU COLORIDA)
function verificaPintura(){
	$(".container-pintura-selecionada").css('display', 'none');
	$('.campo-file-pintura').css('display', 'none');
	$('.model-pintura').animate({
		"height": "0px",
	});
	$('.container-pintura-selecionada').animate({
		"height": "0px",
		"opacity": "0",
	});
	setTimeout(function(){
        	$('.model-pintura').css('display', 'none');	        
	},320);
}

var indicePintura;
function verificaPintura1(){
		$(".container-pintura-selecionada").css('display', 'block');
		$('.model-pintura').css('display', 'block');
		$('.arrow-esquerda').css('display', 'block');
		$('.arrow-direita').css('display', 'block');
		$('.btn-enviapintura').css('display', 'block');
		$('.btn-selecionaoutrocampo').css('display', 'none');
		$('.btn-selecionacampo').css('display', 'block');
		$('.model-pintura').animate({
			"height": "520px",
		});
		if(indicePintura == 1){
			$(".container-pintura-selecionada").animate({
				"opacity": "0",
				"height": "0px",
			},1);
		}
		$('.campo-file-pintura').css('display', 'none');
	}
/////////////////////////////////////////////////////////////////////////

////////////////////// VARIAVEIS QUE CONTROLAM O SLIDE DOS MODELOS DE PINTURA
var i=0;
var images = ["images/imgs-pintura/model.jpeg",
			 "images/imgs-pintura/model3.jpeg",
			 "images/imgs-pintura/model4.jpeg",
			 "images/imgs-pintura/model5.jpeg",
			 "images/imgs-pintura/model6.jpeg",
			 "images/imgs-pintura/model7.jpeg",
			 "images/imgs-pintura/model8.jpeg",
			 "images/imgs-pintura/model10.jpeg",
			 "images/imgs-pintura/model12.jpeg",
			 "images/imgs-pintura/model13.jpeg",
			 "images/imgs-pintura/model14.jpeg",
			 "images/imgs-pintura/model15.jpeg",
			 "images/imgs-pintura/model16.jpeg",
			 "images/imgs-pintura/model17.jpeg",
			 "images/imgs-pintura/model18.jpeg",
			 ]
///////////////////////////////////////////////////

/////////////////// FUNÇÕES PARA CONTROLAR AS SETAS(ESQUERDA E DIREITA) DO SLIDE
function avançaSlidePintura(){
	$('.img-selecionada').animate({opacity:0,},150 ,function(){
		i = (i + 1) % images.length;				 
		$(".img-selecionada").css("background", 'url("'+images[i]+'")center/120% 500px no-repeat');
		$('.img-selecionada').animate({opacity:1,},150);
	});
}


function voltaSlidePintura(){
	$('.img-selecionada').animate({opacity:0,},150 ,function(){
		if(i != 0){
			i = (i - 1) % images.length;				 
			$(".img-selecionada").css("background", 'url("'+images[i]+'")center/100% 500px no-repeat');
			$('.img-selecionada').animate({opacity:1,},150);
		}else{
			i = 14;				 
			$(".img-selecionada").css("background", 'url("'+images[i]+'")center/100% 500px no-repeat');
			$('.img-selecionada').animate({opacity:1,},150);	
		}
	});
}
/////////////////////////////////////////////////////////////

//////////////////////// TRAVA O SLIDE QUANDO O USUARIO 
//////////////////////// CLICA NO BOTAO (SELECIONAR ESTA PINTURA)
function recuperaPintura(){
	form.imgselecionada.value = images[i];
	var pinturaSelecionada = 	form.imgselecionada.value;
	pinturaSelecionada = images[i];
	indicePintura = 1;
	$(".container-pintura-selecionada").css('display', 'block');
	$(".container-pintura-selecionada").animate({
			"opacity": "1",
			"height": "520px",
	},500);
	setTimeout(function(){
		$('.arrow-esquerda').css('display', 'none');
		$('.arrow-direita').css('display', 'none');
		$('.btn-enviapintura').css('display', 'none');
		$('.btn-selecionaoutrocampo').css('display', 'block');
		$('.btn-selecionacampo').css('display', 'none');
	},400);
}

////////////////////////// RECOLHE O SLIDE E APLICA DISPLAY BLOCK
////////////////////////// NO INPUT FILE QUANDO O USUARIO CLICA NO BOTAO
///////////////////////// (PREFIRO ENVIAR UMA FOTO DA PINTURA DESEJADA)
function fechaModelPintura(){

	$('.model-pintura').animate({
		"height": "0px",
	});
	$(".container-pintura-selecionada").animate({
			"opacity": "0",
			"height": "0px",

	},500);
	setTimeout(function(){
        $('.model-pintura').css('display', 'none');
        $('.campo-file-pintura').css('display', 'block');
	},400);
}

////////////////////////// HABILITA NOVAMENTE O SLIDE QUANDO
////////////////////////// O USUARIO CLICA NO BOTAO (SELECIONAR OUTRA PINTURA) 
function outraPintura(){
	$(".container-pintura-selecionada").animate({
			"opacity": "0",
			"height": "0px",
	},500);
	setTimeout(function(){
		$('.arrow-esquerda').css('display', 'block');
		$('.arrow-direita').css('display', 'block');
        $('.model-pintura').css('display', 'block');
        $('.btn-enviapintura').css('display', 'block');
		$('.btn-selecionacampo').css('display', 'block');
		$('.btn-selecionaoutrocampo').css('display', 'none');
	},400);
}