﻿function introduction() {
	h=$(window).height()-154;h2=($(window).height()-154)/2-10;p1=Math.ceil($(window).width()*640/1900/10)*10;p2=Math.ceil($(window).width()*300/1900/10)*10;p3=Math.ceil($(window).width()*450/1900/10)*10;l=(Math.ceil($(window).width()/10)*10-$(window).width())/2;$(".introduction .slider").css({height:h+"px","margin-top":"0","margin-left":-l+"px"});$(".introduction .slider .main, .introduction .slider .main > div, .introduction .slider .lside, .introduction .slider .lside > div, .introduction .slider .rside, .introduction .slider .rside > div").css({height:h+"px"});$(".introduction .slider .preview1, .introduction .slider .preview1 > div, .introduction .slider .preview2, .introduction .slider .preview2 > div").css({height:h2+"px"});$(".introduction .slider .preview1 > div").css({top:-h2+"px"});$(".introduction .slider .lside").css({left:"0",width:p3+"px"});$(".introduction .slider .lside > div").css({left:-p3+"px",width:p3+"px"});$(".introduction .slider .preview1, .introduction .slider .preview2").css({left:p3+20+"px",width:p2+"px"});$(".introduction .slider .preview1 > div, .introduction .slider .preview2 > div").css({width:p2+"px"});$(".introduction .slider .preview2 > div").css({left:-p2+"px"});$(".introduction .slider .main").css({left:p3+p2+40+"px",width:p1+"px"});$(".introduction .slider .main > div").css({left:p1+"px",width:p1+"px"});$(".introduction .slider .rside").css({left:p3+p2+p1+60+"px",width:p3+"px"});$(".introduction .slider .rside > div").css({left:-p3+"px",width:p3+"px"})
}
function animation() {
	var animation = 1000;
	var speed = 5000;
	$(".introduction .slider").append('<div class="main"></div><div class="preview1"></div><div class="preview2"></div>');$(".introduction .slider .preview1, .introduction .slider .preview2, , .introduction .slider .main").html($(".introduction .core").html());var i=2;m=$(".introduction .slider .main > div").size();setInterval(function(){if(i<m){if(i==1){$(".introduction .slider .main > div:nth-child("+m+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);var e=m}else{$(".introduction .slider .main > div:nth-child("+(i-1)+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);var e=i-1}$(".introduction .slider .main > div:nth-child("+i+")").stop(true,true).animate({left:"0","z-index":"1"},animation);if(e==1){$(".introduction .slider .preview1 > div:nth-child("+m+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);var t=m}else{$(".introduction .slider .preview1 > div:nth-child("+(e-1)+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);var t=e-1}$(".introduction .slider .preview1 > div:nth-child("+e+")").stop(true,true).animate({top:"0","z-index":"1"},animation);if(t==1){$(".introduction .slider .preview2 > div:nth-child("+m+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation)}else{$(".introduction .slider .preview2 > div:nth-child("+(t-1)+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation)}$(".introduction .slider .preview2 > div:nth-child("+t+")").stop(true,true).animate({left:"0","z-index":"1"},animation);i++}else{$(".introduction .slider .main > div:nth-child("+(i-1)+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);$(".introduction .slider .main > div:nth-child("+i+")").stop(true,true).animate({left:"0","z-index":"1"},animation);var e=i-1;$(".introduction .slider .preview1 > div:nth-child("+(e-1)+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);$(".introduction .slider .preview1 > div:nth-child("+e+")").stop(true,true).animate({top:"0","z-index":"1"},animation);var t=e-1;$(".introduction .slider .preview2 > div:nth-child("+(t-1)+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation);$(".introduction .slider .preview2 > div:nth-child("+t+")").stop(true,true).animate({left:"0","z-index":"1"},animation);i=1}},speed)	
}
function sideblock() {
	var animation2 = 1000;
	var speed2 = 5000;
	var delay = speed2/2;
	$(".introduction .slider").append('<div class="lside"></div><div class="rside"></div>');$(".introduction .slider .lside, .introduction .slider .rside").html($(".introduction .sub").html());var i2=2;m2=$(".introduction .slider .lside > div").size();setTimeout(function(){setInterval(function(){if(i2<m2){if(i2==1){$(".introduction .slider .lside > div:nth-child("+m2+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);var e=m2}else{$(".introduction .slider .lside > div:nth-child("+(i2-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);var e=i2-1}$(".introduction .slider .lside > div:nth-child("+i2+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);if(e==1){$(".introduction .slider .rside > div:nth-child("+m2+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2)}else{$(".introduction .slider .rside > div:nth-child("+(e-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2)}$(".introduction .slider .rside > div:nth-child("+e+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);i2++}else{$(".introduction .slider .lside > div:nth-child("+(i2-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);$(".introduction .slider .lside > div:nth-child("+i2+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);var e=i2-1;$(".introduction .slider .rside > div:nth-child("+(e-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);$(".introduction .slider .rside > div:nth-child("+e+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);i2=1}},speed2)},delay)
}
function start() {
	$(".introduction .slider .main > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .preview1 > div:nth-child("+$(".introduction .slider .main > div").size()+")").css({top:"0","z-index":"1"});$(".introduction .slider .preview2 > div:nth-child("+($(".introduction .slider .main > div").size()-1)+")").css({left:"0","z-index":"1"});$(".introduction .slider .lside > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .rside > div:nth-child("+$(".introduction .slider .lside > div").size()+")").css({left:"0","z-index":"1"})
}
$(window).resize(function() {
	if ( $('.introduction').length > 0 ) {
		$(".introduction .slider").empty();animation();sideblock();introduction();start()
	}
});
$(window).load(function() {
	if ( $('.introduction').length > 0 ) {
		var h,h2,m,m2,p1,p2,p3,l;$(".introduction .core > div, .introduction .sub > div").each(function(){$(this).css({background:'url("'+$(this).find("img").attr("src")+'") no-repeat center center',"-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"})});animation();sideblock();introduction();start();$(".introduction .slider > div > div").click(function(){window.location=$(this).attr("data-href");return false});$(window).bind("scroll",function(){if($(window).scrollTop()<$(window).height()){$(".slider").css({transform:"translateY("+$(window).scrollTop()/3+"px)"})}})
	}
	$('.loader').stop(true,true).fadeOut(500);
});
$(document).ready(function() {
	if ( $('.content #map').length > 0 && $('.content .nav').length > 0 ) {
		$(".content .nav").css({"margin-bottom":"33px"})
	}
	if ( $('.portfolio').length > 0 ) {
		$(".portfolio .main").slides({generatePagination:true,generateNextPrev:true,container:"container",effect:"slide",slideSpeed:1e3,play:5e3,pause:0})
	}
	if ( $('.catalog').length > 0 ) {
		$(".catalog > div").masonry({itemSelector:".item"});$(".catalog > div .item").each(function(){$(this).find("a").height($(this).height())});$(".catalog > div .item").hover(function(){$(this).find("a").stop(true,true).fadeIn(500)},function(){$(this).find("a").stop(true,true).fadeOut(500)})
	}
	if ( $('.content .year').length > 0 ) {
		$('.content .year select').selectbox();
	}
	if ( $('.timeline').length > 0 ) {
		$(".timeline > div > div").each(function(){var e=$(this);if($(this).attr("data-vertical")=="top"){$(this).addClass("top");$(this).css({left:$(this).attr("data-left")+"px"});$(this).find("h6").css({top:"0"});$(this).find("p").css({top:"45px"})}else{$(this).addClass("bottom");$(this).css({left:$(this).attr("data-left")+"px"});$(this).find("h6").css({bottom:"0"});$(this).find("p").css({bottom:"48px"})}})
	}
	$('.content .contacts .form h6 span').bind('click', function() {
		$(this).parent().find('input[type="file"]').trigger('click');return false
	});
	if ( $('.index').length > 0 ) {
		$(".index").addClass("static");$(window).bind("DOMMouseScroll mousewheel",function(e){var t=e.originalEvent.wheelDelta||e.originalEvent.detail*-1;if($(".index.static").length>0){if(t/120>0){$(".index").removeClass("static");$(".index").animate({top:"100%"},1e3,function(){$(".index").addClass("static")})}else{$(".index").removeClass("static");$(".index").animate({top:"0"},1e3,function(){$(".index").addClass("static")})}}})
	}
	$('input, textarea').each(function () {
		$(this).data("holder",$(this).attr("placeholder"));$(this).focusin(function(){$(this).attr("placeholder","")});$(this).focusout(function(){$(this).attr("placeholder",$(this).data("holder"))})
	});
});