$(".ui-drop").hide();
$(".ui-drop2").hide();
$(".ui-drop3").hide();
$(".ui-drop4").hide();
$(".ui-drop5").hide();
$(document).ready(function(){
	$("#drop1").click(function(){
		$(".ui-drop").toggle();
		$(".ui-drop2").hide();
		$(".ui-drop3").hide();
		$(".ui-drop4").hide();
		$(".ui-drop5").hide();
	});
	$("#drop2").click(function(){
		$(".ui-drop2").toggle();
		$(".ui-drop").hide();
		$(".ui-drop3").hide();
		$(".ui-drop4").hide();
		$(".ui-drop5").hide();
	});
	$("#drop3").click(function(){
		$(".ui-drop3").toggle();
		$(".ui-drop").hide();
		$(".ui-drop2").hide();

		$(".ui-drop4").hide();
		$(".ui-drop5").hide();
	});
	$("#drop4").click(function(){
		$(".ui-drop4").toggle();
		$(".ui-drop").hide();
		$(".ui-drop2").hide();
		$(".ui-drop3").hide();
		$(".ui-drop5").hide();
	});
	$("#drop5").click(function(){
		$(".ui-drop5").toggle();
		$(".ui-drop").hide();
		$(".ui-drop2").hide();
		$(".ui-drop3").hide();
		$(".ui-drop4").hide();
	});
});



