function resetFormat(){
	$(".container-disclaimer").css("display", "none");
	$(".disclaimer-round").css("display", "none");
	$(".disclaimer-square").css("display", "none");
	$(".disclaimer-squash").css("display", "none");
	$(".disclaimer-roundsquash").css("display", "none");
	$(".disclaimer-pin").css("display", "none");
	$(".disclaimer-roundpin").css("display", "none");
	$(".disclaimer-diamond").css("display", "none");
	$(".disclaimer-halfmoon").css("display", "none");
	$(".disclaimer-bat").css("display", "none");
	$(".disclaimer-swallow").css("display", "none");
	$(".disclaimer-wingswallow").css("display", "none");
}


///////////////////// FUNÇÃO QUE ABRE O CONTAINER ///////////////////////////////
$('.call-disclaimer-round').click(function disclaimerRound(){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-round").css("display", "block");
});
///////////////////// FUNÇÃO QUE FECHA O CONTAINER ///////////////////////////////
$('.close-round').click(function closeRound() {
	$(".disclaimer-round").css("display", "none");
});

//////////////////////////////////////////////////////////////////////////////////
$('.call-disclaimer-square').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-square").css("display", "block");
});

$(".close-square").click(function () {
		$(".disclaimer-square").css("display", "none");
});
/////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-squash').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-squash").css("display", "block");
});

$(".close-squash").click(function () {
	$(".disclaimer-squash").css("display", "none");
});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-roundsquash').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-roundsquash").css("display", "block");
});

$(".close-roundsquash").click(function () {
	$(".disclaimer-roundsquash").css("display", "none");

});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-pin').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-pin").css("display", "block");
});

$(".close-pin").click(function () {
	$(".disclaimer-pin").css("display", "none");

});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-roundpin').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-roundpin").css("display", "block");
});

$(".close-roundpin").click(function () {
	$(".disclaimer-roundpin").css("display", "none");
});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-diamond').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-diamond").css("display", "block");
});

$(".close-diamond").click(function () {
	$(".disclaimer-diamond").css("display", "none");

});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-halfmoon').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-halfmoon").css("display", "block");
});

$(".close-halfmoon").click(function () {
	$(".disclaimer-halfmoon").css("display", "none");
});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-bat').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-bat").css("display", "block");
});

$(".close-bat").click(function () {
	$(".disclaimer-bat").css("display", "none");

});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-swallow').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-swallow").css("display", "block");
});

$(".close-swallow").click(function () {
	$(".disclaimer-swallow").css("display", "none");

});
////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-wingswallow').click(function (){
	resetFormat();
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-wingswallow").css("display", "block");
});

$(".close-wingswallow").click(function () {
	$(".disclaimer-wingswallow").css("display", "none");
});


////////////////////////////////COMECO FUNCTIONS QUILHAS////////////////////////////////////////
function resetFormatQuilha(){
	$(".disclaimer-quilhafcs").css("display", "none");
	$(".disclaimer-quilhafusion").css("display", "none");
	$(".disclaimer-quilhafcs2").css("display", "none");
	$(".disclaimer-quilhafuture").css("display", "none");
	$(".disclaimer-quilhacaixaquilhacentral").css("display", "none");
	$(".disclaimer-quilhaestabilizadoras").css("display", "none");
}
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-quilhafcs').click(function (){
	resetFormatQuilha();
	
	$(".container-disclaimer").css("display", "block");
	$(".disclaimer-quilhafcs").css("display", "block");
});

$(".close-quilhafcs").click(function () {
	
	$(".disclaimer-quilhafcs").css("display", "none");
		
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-quilhafusion').click(function (){
	resetFormatQuilha();
	$(".disclaimer-quilhafusion").css("display", "block");
});

$(".close-quilhafusion").click(function () {	
	$(".disclaimer-quilhafusion").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-quilhafcs2').click(function (){
	resetFormatQuilha();
	$(".disclaimer-quilhafcs2").css("display", "block");
});

$(".close-quilhafcs2").click(function () {
	
	$(".disclaimer-quilhafcs2").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////
$('.call-disclaimer-quilhafuture').click(function (){
	resetFormatQuilha();
	$(".disclaimer-quilhafuture").css("display", "block");
});

$(".close-quilhafuture").click(function () {
	
	$(".disclaimer-quilhafuture").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////
$('.call-disclaimer-quilhacaixaquilhacentral').click(function (){
	resetFormatQuilha();
	$(".disclaimer-quilhacaixaquilhacentral").css("display", "block");
});

$(".close-quilhacaixaquilhacentral").click(function () {
	
	$(".disclaimer-quilhacaixaquilhacentral").css("display", "none");
	
});

/////////////////////////////////////////////////////////////////////////////////////////
$('.call-disclaimer-quilhaestabilizadoras').click(function (){
	resetFormatQuilha();
	$(".disclaimer-quilhaestabilizadoras").css("display", "block");
});

$(".close-quilhaestabilizadoras").click(function () {
	
	$(".disclaimer-quilhaestabilizadoras").css("display", "none");
	
});

/////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////COMECO FUNCTIONS BORDAS//////////////////////////////////////
function resetFormatBorda(){
	$(".disclaimer-borda50x50").css("display", "none");
	$(".disclaimer-bordaMedia").css("display", "none");
	$(".disclaimer-bordaBaixaFaca").css("display", "none");
}
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-borda50x50').click(function (){
	resetFormatBorda();
	
	$(".disclaimer-borda50x50").css("display", "block");
});

$(".close-borda50x50").click(function () {
	$(".disclaimer-borda50x50").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-bordaMedia').click(function (){
	resetFormatBorda();
	
	$(".disclaimer-bordaMedia").css("display", "block");
});

$(".close-bordaMedia").click(function () {
	
			$(".disclaimer-bordaMedia").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-bordaBaixaFaca').click(function (){
	resetFormatBorda();
	
	$(".disclaimer-bordaBaixaFaca").css("display", "block");
});

$(".close-bordaBaixaFaca").click(function () {
	
			$(".disclaimer-bordaBaixaFaca").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////COMECO FUNCTIONS BORDAS//////////////////////////////////////
function resetFormatFundo(){
	$(".disclaimer-fundoConcave").css("display", "none");
	$(".disclaimer-fundoDConcave").css("display", "none");
	$(".disclaimer-fundoFlat").css("display", "none");
	$(".disclaimer-fundoVBottom").css("display", "none");
	$(".disclaimer-fundoCanaleta").css("display", "none");
}

$('.call-disclaimer-fundoConcave').click(function (){
	resetFormatFundo();
	
	$(".disclaimer-fundoConcave").css("display", "block");
});

$(".close-fundoConcave").click(function () {
			$(".disclaimer-fundoConcave").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-fundoDConcave').click(function (){
	resetFormatFundo();
	
	$(".disclaimer-fundoDConcave").css("display", "block");
});

$(".close-fundoDConcave").click(function () {
	
			$(".disclaimer-fundoDConcave").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-fundoFlat').click(function (){
	resetFormatFundo();
	
	$(".disclaimer-fundoFlat").css("display", "block");
});

$(".close-fundoFlat").click(function () {
	
			$(".disclaimer-fundoFlat").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-fundoVBottom').click(function (){
	resetFormatFundo();
	
	$(".disclaimer-fundoVBottom").css("display", "block");
});

$(".close-fundoVBottom").click(function () {
	
			$(".disclaimer-fundoVBottom").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////

$('.call-disclaimer-fundoCanaleta').click(function (){
	resetFormatFundo();
	
	$(".disclaimer-fundoCanaleta").css("display", "block");
});

$(".close-fundoCanaleta").click(function () {
	
			$(".disclaimer-fundoCanaleta").css("display", "none");
	
});
/////////////////////////////////////////////////////////////////////////////////////////