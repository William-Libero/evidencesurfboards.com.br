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