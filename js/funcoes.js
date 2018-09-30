var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;

///////////////////////////////////////// CONTROLA QUANDO O BOTAO DE MENU MOBILE APARECE ///////////////////////////////////////////////////
$(".btn-menu-mobile").click(function(){
	$(".menu-mobile").fadeTo(150, 1);
	$(".menu-mobile").css("display", "block")
	$(".btn-menu-mobile").css("margin-top", "-200px")
	$(".btn-close-menu-mobile").css("display", "block")
	$("body").css("overflow", "hidden")
	$(".menu-mobile").css("overflow-x", "hidden")
});

$(".btn-close-menu-mobile").click(function(){
	$(".menu-mobile").fadeOut(150, 0);
	$(".btn-close-menu-mobile").css("display", "none")
	$(".btn-menu-mobile").css("margin-top", "18px")
	$("body").css("overflow", "visible")
});

///////////////////////////////////////   DROPDOWNS MENU MOBILE    ///////////////////////////////////////////////////////////////////////
$(".mobile-evidence").click(function(){
	if(count0 == 0){
		count0 = 1;
		$(".submenu-mobile-evidence").animate({
			height: "200px",
		},250);
		$(".submenu-mobile-evidence").css("display", "block");
	}else{
		count0 = 0;
		$(".submenu-mobile-evidence").stop().animate({
			height: "0px",
		},250);
		setTimeout(function(){
			$(".submenu-mobile-evidence").css("display", "none");
		},250);
	}
});

$(".mobile-pranchas").click(function(){
	if(count1 == 0){
		count1 = 1;
		$(".submenu-mobile-pranchas").animate({
			height: "200px",
		},250);
		$(".submenu-mobile-pranchas").css("display", "block");
	}else{
		count1 = 0;
		$(".submenu-mobile-pranchas").stop().animate({
			height: "0px",
		},250);
		setTimeout(function(){
			$(".submenu-mobile-pranchas").css("display", "none");
		},250);
	}
});

$(".mobile-servicos").click(function(){
	if(count2 == 0){
		count2 = 1;
		$(".submenu-mobile-servicos").animate({
			height: "200px",
		},250);
		$(".submenu-mobile-servicos").css("display", "block");
	}else{
		count2 = 0;
		$(".submenu-mobile-servicos").stop().animate({
			height: "0px",
		},250);
		setTimeout(function(){
			$(".submenu-mobile-servicos").css("display", "none");
		},250);
	}
});

$(".mobile-produtos").click(function(){
	if(count3 == 0){
		count3 = 1;
		$(".submenu-mobile-produtos").animate({
			height: "200px",
		},250);
		$(".submenu-mobile-produtos").css("display", "block");
	}else{
		count3 = 0;
		$(".submenu-mobile-produtos").stop().animate({
			height: "0px",
		},250);
		setTimeout(function(){
			$(".submenu-mobile-produtos").css("display", "none");
		},250);
	}
});

///////////////////////////////////////////// DROPDOWN - AEVIDENCE ///////////////////////////////////////////////////
$(".evidence").mouseenter(function(){
	$(".submenu-evidence").stop().animate({
		height: '123px',
	},250);
	$(".evidence").stop().animate({
		height: '130px',
	},250);
	$(".submenu-evidence").css("display", "block");
	$(".submenu-evidence li").css("display", "block");


	$(".evidence").mouseleave(function(){
		$(".submenu-evidence").stop().animate({
			height: '0px',
		},250);
		$(".evidence").stop().animate({
			height: '20px',
		},250);
		$(".submenu-evidence li").css("display", "none");
	});
});

///////////////////////////////////////////// DROPDOWN - PRANCHAS ///////////////////////////////////////////////////
$(".pranchas").mouseenter(function(){
	$(".submenu-pranchas").stop().animate({
		height: '123px',
	},250);
	$(".pranchas").stop().animate({
		height: '130px',
	},250);
	$(".submenu-pranchas").css("display", "block");
	$(".submenu-pranchas li").css("display", "block");


	$(".pranchas").mouseleave(function(){
		$(".submenu-pranchas").stop().animate({
			height: '0px',
		},250);
		$(".pranchas").stop().animate({
			height: '20px',
		},250);
		$(".submenu-pranchas li").css("display", "none");
	});
});

///////////////////////////////////////////// DROPDOWN - SERVICO ///////////////////////////////////////////////////
$(".servico").mouseenter(function(){
	$(".submenu-servico").stop().animate({
		height: '123px',
	},250);
	$(".servico").stop().animate({
		height: '130px',
	});
	$(".submenu-servico").css("display", "block");
	$(".submenu-servico li").css("display", "block");


	$(".servico").mouseleave(function(){
		$(".submenu-servico").stop().animate({
			height: '0px',
		},250);
		$(".servico").stop().animate({
			height: '20px',
		},250);
		$(".submenu-servico li").css("display", "none");
	});
});


///////////////////////////////////////////// DROPDOWN - PRODUTOS ///////////////////////////////////////////////////
$(".produtos").mouseenter(function(){
	$(".submenu-produtos").stop().animate({
		height: '123px',
	},250);
	$(".produtos").stop().animate({
		height: '130px',
	});
	$(".submenu-produtos").css("display", "block");
	$(".submenu-produtos li").css("display", "block");


	$(".produtos").mouseleave(function(){
		$(".submenu-produtos").stop().animate({
			height: '0px',
		},250);
		$(".produtos").stop().animate({
			height: '20px',
		},250);
		$(".submenu-produtos li").css("display", "none");
	});
});

///////////////////////////////////////////// COMEÇO - FUNCTIONS - SLIDER ///////////////////////////////////////////////////
///////////////////////////////////////////// RECUPERA A CLASS SLIDER ///////////////////////////////////////////////////

var slider = $(".slider");
///////////////////////////////////////////// SETA AS VARIÁVEIS QUE SERÃO USADAS EM TODAS FUNCTIONS DO SLIDER ///////////////////////////////////////////////////
var i = -1;
var indiceSoma = null;
var indiceSub = null;
var statusSlide = 0;
var slide, slide1;
var isSet;

///////////////////////////////////////////// SETA O ARRAY QUE SERÁ UTILIZADO PARA CONTROLAR AS IMGS DO SLIDER //////////////////////////////////////////////////
var images = [
	"imgs/img-slider/surf-15.jpeg",
	"imgs/img-slider/surf-06.jpeg",
	"imgs/img-slider/surf-03.jpg",
	"imgs/img-slider/surf-08.jpeg",
]

////////////////////////////////////// INICIA O SLIDE ASSIM QUE A PAGINA É CARREGADA
$('document').ready(function mostraSlide(){
	if(i == -1){
		slide1 = setInterval(startSlide,10);
		isSet = true;
	}
});

////////////////////////////////////// VERIFICA SE O USUÁRIO ESTA VISUALIZANDO O SITE
window.onfocus = function mostraSlideFocus(){
	slide = setInterval(startSlide,6000);
	clearInterval(slide1);
}

////////////////////////////////////// VERIFICA SE O USUÁRIO ESTA FORA DO SITE
window.onblur = function(){
	paraSlide();
}

////////////////////////////////////// RESETA O TEMPO DA FUNÇÃO STARTSLIDE
function paraSlide(){
	clearInterval(slide);
	clearInterval(slide1);
}

/*/////////////////////////////////////  NA CONDIÇÃO I === I         ///////////////////////////////////////////////////////////////////////////////////////////
function disparaInfos(){
	$(".container" + i + "-info").stop().css("display", "block");
	$(".container" + i + "-info").stop().delay(300).animate({
		"opacity": "1",
	},500)
	$(".h2-info" + i).stop().css("display", "block");
	$(".h2-info" + i).stop().delay(300).animate({
		"margin-top": "0px",
		"opacity": "1",
	},500)
	$(".p-info" + i).stop().css("display", "block");
	$(".p-info" + i).stop().delay(300).animate({
		"margin-left": "0px",
		"opacity": "1",
	},500);
	console.log('imagem ' + i + " " + images[i]);
}
*/
////////////////////////////////////// FUNÇÃO QUE INICIALIZA O SLIDE
///////////////////////////////////////////// SOMA A VARIAVEL QUE SERÁ REFERENCIA NO ARRAY DAS IMGS /////////////////////////////////////////////////////////////
function startSlide(){
	i = (i + 1) % images.length;	

	if(isSet == true){
		clearInterval(slide1);
		slide1 = setInterval(startSlide,6000);
	}


	if(i == 0){
		isSet = false;
	}

	
///////////////////////////////////////////// ANIMAÇÃO DA IMAGEM BASEADA NA VARIAVEL i - (MUDA A OPACIDADE DA IMAGEM) ///////////////////////////////////////////
	$(slider).animate({opacity: 0,},150 ,function(){
		$(".slider").css("background", 'url("'+images[i]+'")center/100% 460px');
		$(slider).animate({opacity: 1,},250);
	});

///////////////////////////////// DISPARA A INFO BASEADA NA VARIAVEL i (MUDA A OPACIDADE E ARRASTA OS CONTEUDOS COM "MARGIN") ///////////////////////////////////
	if(i === i){
		$(".container" + i + "-info").stop().css("display", "block");
		$(".container" + i + "-info").stop().delay(300).animate({
			"opacity": "1",
		},500);
		$(".h2-info" + i).stop().css("display", "block");
		$(".h2-info" + i).stop().delay(300).animate({
			"margin-top": "0px",
			"opacity": "1",
		},500);
		$(".p-info" + i).stop().css("display", "block");
		$(".p-info" + i).stop().delay(300).animate({
			"margin-left": "0px",
			"opacity": "1",
		},500);
	}

///////////////////////////////// FUNCTION QUE REMOVE A INFO ANTERIOR /////////////////////////////////////////////////////////////////////////

	if(i === 1){
		setTimeout(function(){
			$(".container" + (i-1) + "-info").animate({
				"opacity": "0",
			},500);
			$(".h2-info" + (i-1)).animate({
				"margin-top": "50px",
				"opacity": "0",
			},500);
			$(".p-info" + (i-1)).animate({
				"margin-right": "0%",
				"opacity": "0",
			},500);
		}, 2);
	// FUNCTION QUE APLICA "DISPLAY: NONE" NOS CONTEUDOS DA INFO ANTERIOR ///////////////////////////////////////
		setTimeout(function(){
			$(".container" + (i-1) + "-info").css("display", "none");
			$(".h2-info" + (i-1)).css("display", "none");
			$(".p-info" + (i-1)).css("display", "none");
		}, 0);
	}else if(i === 3){
		setTimeout(function(){
			$(".container" + (i-1) + "-info").animate({
				"opacity": "0",
			},500);
			$(".h2-info" + (i-1)).animate({
				"margin-top": "50px",
				"opacity": "0",
			},500);
			$(".p-info" + (i-1)).animate({
				"margin-right": "0%",
				"opacity": "0",
			},500);
		}, 2);
	///////////////////////////////// FUNCTION QUE APLICA "DISPLAY: NONE" NOS CONTEUDOS DA INFO ANTERIOR ///////////////////////////////////////
		setTimeout(function(){
			$(".container" + (i-1) + "-info").css("display", "none");
			$(".h2-info" + (i-1)).css("display", "none");
			$(".p-info" + (i-1)).css("display", "none");
		}, 0);
	}else if(i === 0){
		setTimeout(function(){
			$(".container" + (i+3) + "-info").animate({
				"opacity": "0",
			},500);
			$(".h2-info" + (i+3)).animate({
				"margin-top": "50px",
				"opacity": "0",
			},500);
			$(".p-info" + (i+3)).animate({
				"margin-right": "0%",
				"opacity": "0",
			},500);
		}, 2);
	///////////////////////////////// FUNCTION QUE APLICA "DISPLAY: NONE" NOS CONTEUDOS DA 3° INFO ///////////////////////////////////////
		setTimeout(function(){
			$(".container" + (i+3) + "-info").css("display", "none");
			$(".h2-info" + (i+3)).css("display", "none");
			$(".p-info" + (i+3)).css("display", "none");
		}, 0);
	}else if(i === 2){
		setTimeout(function(){
			$(".container" + (i-1) + "-info").animate({
				"opacity": "0",
			},500);
			$(".h2-info" + (i-1)).animate({
				"margin-top": "50px",
				"opacity": "0",
			},500);
			$(".p-info" + (i-1)).animate({
				"margin-right": "0%",
				"opacity": "0",
			},500);
		}, 2);
	// FUNCTION QUE APLICA "DISPLAY: NONE" NOS CONTEUDOS DA INFO ANTERIOR ///////////////////////////////////////
		setTimeout(function(){
			$(".container" + (i-1) + "-info").css("display", "none");
			$(".h2-info" + (i-1)).css("display", "none");
			$(".p-info" + (i-1)).css("display", "none");
		}, 0);
	}
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////// FUNCTION QUE CONTROLA O SLIDER DISPARANDO SEMPRE A IMAGEM ANTERIOR NO ARRAY DO SLIDER ////////////////////////////
///////////////////////////////////////////// SUBTRAI A VARIAVEL QUE SERÁ REFERENCIA NO ARRAY DAS IMGS ////////////////////////////////////////////////////////
$(".esquerda").click(function(){

	if(i != 0){
		i = (i - 1) % images.length;
	}else{
		i = 3;
	}
///////////////////////////////////////////// SOMA A VARIAVEL QUE SERÁ REFERENCIA PARA REMOVER A INFO ANTERIOR /////////////////////////////////////////////////
	if(i != 3){
		indiceSoma = i + 1;
	}else{
		indiceSoma = 0;
	}
///////////////////////////////// DISPARA A INFO BASEADA NA VARIAVEL i (MUDA A OPACIDADE E ARRASTA OS CONTEUDOS COM "MARGIN") ///////////////////////////////////
	if(i === i){
		$(".container" + i + "-info").stop().css("display", "block");
		$(".container" + i + "-info").stop().delay(300).animate({
			"opacity": "1",
		},500)
		$(".h2-info" + i).stop().css("display", "block");
		$(".h2-info" + i).stop().delay(300).animate({
			"margin-top": "0px",
			"opacity": "1",
		},500)
		$(".p-info" + i).stop().css("display", "block");
		$(".p-info" + i).stop().delay(300).animate({
			"margin-left": "0px",
			"opacity": "1",
		},500);
	}
///////////////////////////////// REMOVE A INFO ANTERIOR BASEADA NA VARIAVEL indiceSoma (MUDA A OPACIDADE E ARRASTA OS CONTEUDOS COM "MARGIN") ///////////////////
	$(".container" + indiceSoma + "-info").stop().delay(500).animate({
		"opacity": "0",
	},500)
	$(".h2-info" + indiceSoma).stop().delay(500).animate({
		"margin-top": "50px",
		"opacity": "0",
	},500)
	$(".p-info" + indiceSoma).stop().delay(500).animate({
		"margin-left": "0px",
		"opacity": "0",
	},500)
///////////////////////////////// APLICA "DISPLAY: NONE" A INFO ANTERIOR BASEADA NA VARIAVEL indiceSoma //////////////////////////////////////////////////////////
	$(".container" + indiceSoma + "-info").css("display", "none");
	$(".h2-info" + indiceSoma).css("display", "none");
	$(".p-info" + indiceSoma).css("display", "none");
///////////////////////////////////////////// ANIMAÇÃO DA IMAGEM BASEADA NA VARIAVEL i - (MUDA A OPACIDADE DA IMAGEM) ///////////////////////////////////////////
	$(slider).animate({opacity: 0,},150 ,function(){
		$(".slider").css("background", 'url("'+images[i]+'")center/100% 460px');	
		$(slider).animate({opacity: 1,},250); 
	});	
	tempoSlider = 6000;
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////// FUNCTION QUE CONTROLA O SLIDER DISPARANDO SEMPRE A PRÓXIMA IMAGEM NO ARRAY DO SLIDER ////////////////////////////
///////////////////////////////////////////// SOMA A VARIAVEL QUE SERÁ REFERENCIA NO ARRAY DAS IMGS ///////////////////////////////////////////////////////////
$(".direita").click(function(){
	i = (i + 1) % images.length;
///////////////////////////////////////////// SUBTRAI A VARIAVEL QUE SERÁ REFERENCIA PARA REMOVER A INFO ANTERIOR /////////////////////////////////////////////	
	if(i != 0){
		indiceSub = i - 1;
	}else{
		indiceSub = 3;
	}
///////////////////////////////// DISPARA A INFO BASEADA NA VARIAVEL i (MUDA A OPACIDADE E ARRASTA OS CONTEUDOS COM "MARGIN") ///////////////////////////////////
	if(i === i){
		$(".container" + i + "-info").stop().css("display", "block");
		$(".container" + i + "-info").stop().delay(300).animate({
			"opacity": "1",
		},500)
		$(".h2-info" + i).stop().css("display", "block");
		$(".h2-info" + i).stop().delay(300).animate({
			"margin-top": "0px",
			"opacity": "1",
		},500)
		$(".p-info" + i).stop().css("display", "block");
		$(".p-info" + i).stop().delay(300).animate({
			"margin-left": "0px",
			"opacity": "1",
		},500);
	}
///////////////////////////////// REMOVE A INFO ANTERIOR BASEADA NA VARIAVEL indiceSub (MUDA A OPACIDADE E ARRASTA OS CONTEUDOS COM "MARGIN") ///////////////////
	$(".container" + indiceSub + "-info").stop().delay(500).animate({
		"opacity": "0",
	},500)
	$(".h2-info" + indiceSub).stop().delay(500).animate({
		"margin-top": "50px",
		"opacity": "0",
	},500)
	$(".p-info" + indiceSub).stop().delay(500).animate({
		"margin-left": "0px",
		"opacity": "0",
	},500)
///////////////////////////////// APLICA "DISPLAY: NONE" A INFO ANTERIOR BASEADA NA VARIAVEL indiceSub //////////////////////////////////////////////////////////
	$(".container" + indiceSub + "-info").css("display", "none");
	$(".h2-info" + indiceSub).css("display", "none");
	$(".p-info" + indiceSub).css("display", "none");
///////////////////////////////////////////// ANIMAÇÃO DA IMAGEM BASEADA NA VARIAVEL i - (MUDA A OPACIDADE DA IMAGEM) ///////////////////////////////////////////
	$(slider).animate({opacity: 0,},150 ,function(){
		$(".slider").css("background", 'url("'+images[i]+'")center/100% 460px');	
		$(slider).animate({opacity: 1,},250); 
	});
})