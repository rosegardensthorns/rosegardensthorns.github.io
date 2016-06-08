
$( document ).ready(function() {

$("#instructions").hide();
$("#x").hide();
$("#prisondoor").hide();
$(".goldenkey2").hide();
$("#metaldiv").hide();
$("#deadend").hide();
$("#wintersh").hide();
$("#secondchancedoor").hide();
$("#meetwinter").hide();
$("#levanash").hide();
$("#levanasr").hide();
$("#winterbackground").hide();
$("#staircase").hide();
$("#leftstaircase").hide();
$("#guard").hide();
$("#rightstaircase").hide();
$("#hammer").hide();
$("#hammer2").hide();
$("#actualwinter").hide();
$("#gameover1").hide();
$("#throneroom").hide();
$("#winterspeech").hide();
$("#winterspeech2").hide();
$("#actualwinter2").hide();
$("#winterspeech3").hide();
$("#actualwinter3").hide();
$("#winterspeech4").hide();
$("#actualwinter4").hide();
$("#winterspeech5").hide();
$("#actualwinter5").hide();
$("#winterspeech6").hide();
$("#actualwinter6").hide();
$("#tapestry").hide();
$("#hole").hide();
$("#transition").hide();
$("#lakezoom").hide();


$("#instructionbutton").click(function(){
	$("#startpgtext").hide();
	$("#instructions").show();
	$("#x").show();
}); //end of instructionbutton

$("#x").click(function(){
	$("#startpgtext").show();
	$("#instructions").hide();
	$("#x").hide();
}); //end of "x"

$("#goldenkey").click(function(){
	$("#goldenkey").hide();
	$("#exploreBody").css("background-image", "url(http://img.photobucket.com/albums/v90/subrosa_florens/oblivion/Oblivion348.jpg)");
	$("#prisondoor").show();
	$(".goldenkey2").show();
	$("#metaldiv").show();
	$(document).mousemove(function(e) {
    	$('.goldenkey2').offset({
        	left: e.pageX,
        	top: e.pageY + 20
    	});//end of offset
	});//end of mousemove
});//goldenkey end

$("#metaldiv").click(function(){
	$("#metaldiv").hide();
	$("#exploreBody").css("background-image", "url(http://tespostcards.files.wordpress.com/2015/10/castle-dour-prision.jpg)");
	$("#deadend").show();
	$("#wintersh").show();
	$("#levanash").show();
});//end of metaldiv

$("#deadend").click(function(){
	$("#exploreBody").css("background-image", "url(http://preview.turbosquid.com/Preview/2014/05/25__08_44_59/pic%202.jpgdcf7e882-62c2-4f49-b050-36d6bcba174fOriginal.jpg)");
	$("#deadend").hide();
	$("#wintersh").hide();
	$("levanash").hide();
	$("#secondchancedoor").show();
});// end of deadend

$("#wintersh").click(function(){
	$("#deadend").hide();
	$("#wintersh").hide();
	$(".goldenkey2").hide();
	$("levanash").hide();
	$("#exploreBody").css("background-image", "url(http://www.campture.com/blog/wp-content/uploads/2015/11/3763149320_0cb98c8b45_b.jpg)");
	$("#meetwinter").show();
	$("#staircase").show();
});// end of wintersh

$("#secondchancedoor").click(function(){
	$("#exploreBody").css("background-image", "url(http://img.photobucket.com/albums/v90/subrosa_florens/oblivion/Oblivion348.jpg)");
	$("#metaldiv").show();
});//end of secondchancedoor

$("#meetwinter").click(function(){
	$("#exploreBody").css("background-image", "url(http://blender.hu/galeria/2012/1.jpg)");
	$("#meetwinter").hide();
	$("#actualwinter").show();
	$("#wintersh").hide();
	$("#staircase").hide();
});//end of meetwinter

$("#levanash").click(function(){
	$("#levanash").hide();
	$("#deadend").hide();
	$("#wintersh").hide();
	$(".goldenkey2").hide();
	$("#levanasr").show();
	$("#exploreBody").css("background-image", "url(http://www.campture.com/blog/wp-content/uploads/2015/11/3763149320_0cb98c8b45_b.jpg)");
}); //end of levanash

$("#levanasr").click(function(){
	$("#levanasr").hide();
	$("#guard").show();
	$("#guard").show().delay(200).fadeOut();
	$("#exploreBody").css("background-image", "url(img/throneroom.jpg)").delay(1000).css("background-image", "url(img/gameover.jpg)");
	$("#gameover1").delay(500).show();

});//end of levanasr

$("#staircase").click(function(){
	$("#exploreBody").css("background-image", "url(img/castlestaircase.jpg)");
	$("#staircase").hide();
	$("#leftstaircase").show();
	$("#rightstaircase").show();
}); //end of staircase

$("#leftstaircase").click(function(){
	$("#exploreBody").css("background-image", "url(img/gameover2.jpg)");
	$("#leftstaircase").hide();
	$("#rightstaircase").hide();
});//end of left staircase

$("#rightstaircase").click(function(){
	$("#exploreBody").css("background-image", "url(img/gameover2.jpg)");
	$("#leftstaircase").hide();
	$("#rightstaircase").hide();
});//end of right staircase

$("#hammer").click(function(){
	$("#hammer").hide();
	$("#hammer2").show();
	$(document).mousemove(function(e) {
    	$('#hammer2').offset({
        	left: e.pageX,
        	top: e.pageY + 20
    	});//end of offset
	});//end of mousemove
});// end of hammer

$("#actualwinter").click(function(){
	$("#winterspeech").show();
	$("#actualwinter2").show();
});//end of actualwinter

$("#actualwinter2").click(function(){
	$("#winterspeech").hide();
	$("#winterspeech2").show();
	$("#actualwinter3").show();
});//end of actualwinter2

$("#actualwinter3").click(function(){
	$("#winterspeech2").hide();
	$("#winterspeech3").show();
	$("#actualwinter4").show();
});//end of actualwinter3

$("#actualwinter4").click(function(){
	$("#winterspeech3").hide();
	$("#winterspeech4").show();
	$("#actualwinter5").show();
});// end of actualwinter4

$("#actualwinter5").click(function(){
	$("#winterspeech4").hide();
	$("#winterspeech5").show();
	$("#actualwinter6").show();
});//end of actualwinter5

$("#actualwinter6").click(function(){
	$("#winterspeech5").hide();
	$("#winterspeech6").show();
	$("#tapestry").show();
});//end of actualwinter6

$("#tapestry").click(function(){
	$("#hole").show();
});//end of tapestry

$("#hole").click(function(){
	$("#exploreBody").css("background-image", "url(img/pipe2.jpg)")
	$("#hole").hide();
	$("#winterspeech6").hide();
	$("#actualwinter").hide();
	$("#actualwinter2").hide();
	$("#actualwinter3").hide();
	$("#actualwinter4").hide();
	$("#actualwinter5").hide();
	$("#actualwinter6").hide();
	$("#transition").show();
});//end of hole

$("#transition").click(function(){
	$("#exploreBody").css("background-image", "url(http://40.media.tumblr.com/b2148a504b79f73bff0df26b5ba46c2f/tumblr_n6kmpkThKX1tdzn9qo1_1280.jpg)");
	$("#transition").hide();
	$("#lakezoom").show();
});//end of transition

$("#lakezoom").click(function(){
	$("#exploreBody").css("background-image", "url(img/endscreen.jpg)");
	$("#lakezoom").hide();
});//end of lakezoom

});//end of function