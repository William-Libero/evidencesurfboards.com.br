$('document').ready(function msgEnvio(){
	$('body').css('overflow-y', 'hidden');
	$(".container-msg-envio").animate({
			"opacity": "1",
	},700);

	$(".container-msg").animate({
			"opacity": "1",
			"margin-top": "10%",
	},700);
	$('.container-msg-envio').css('display', 'block');
});

function fechaMsgEnvio(){
	$('body').css('overflow-y', 'scroll');
	$(".container-msg-envio").animate({
			"opacity": "0",
	},700);

	$(".container-msg").animate({
			"opacity": "0",
			"margin-top": "100%",
	},700);	
	setTimeout(function(){
        $('.container-msg-envio').css('display', 'none');
	},710);
};