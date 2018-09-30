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
