﻿function introduction() {
	h=$(window).height()-154;h2=($(window).height()-154)/2-10;p1=Math.ceil($(window).width()*640/1900/10)*10;p2=Math.ceil($(window).width()*300/1900/10)*10;p3=Math.ceil($(window).width()*450/1900/10)*10;l=(Math.ceil($(window).width()/10)*10-$(window).width())/2;$(".introduction .slider").css({height:h+"px","margin-top":"0","margin-left":-l+"px"});$(".introduction .slider .main, .introduction .slider .main > div, .introduction .slider .lside, .introduction .slider .lside > div, .introduction .slider .rside, .introduction .slider .rside > div").css({height:h+"px"});$(".introduction .slider .preview1, .introduction .slider .preview1 > div, .introduction .slider .preview2, .introduction .slider .preview2 > div").css({height:h2+"px"});$(".introduction .slider .preview1 > div").css({top:-h2+"px"});$(".introduction .slider .lside").css({left:"0",width:p3+"px"});$(".introduction .slider .lside > div").css({left:-p3+"px",width:p3+"px"});$(".introduction .slider .preview1, .introduction .slider .preview2").css({left:p3+20+"px",width:p2+"px"});$(".introduction .slider .preview1 > div, .introduction .slider .preview2 > div").css({width:p2+"px"});$(".introduction .slider .preview2 > div").css({left:-p2+"px"});$(".introduction .slider .main").css({left:p3+p2+40+"px",width:p1+"px"});$(".introduction .slider .main > div").css({left:p1+"px",width:p1+"px"});$(".introduction .slider .rside").css({left:p3+p2+p1+60+"px",width:p3+"px"});$(".introduction .slider .rside > div").css({left:-p3+"px",width:p3+"px"})
}
function animation() {
	var animation = 1000;
	var speed = 5000;
	$(".introduction .slider").append('<div class="main"></div><div class="preview1"></div><div class="preview2"></div>');$(".introduction .slider .preview1, .introduction .slider .preview2, , .introduction .slider .main").html($(".introduction .core").html());var i=2;m=$(".introduction .slider .main > div").size();var interval1=setInterval(function(){if(i<m){if(i==1){$(".introduction .slider .main > div:nth-child("+m+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);var e=m}else{$(".introduction .slider .main > div:nth-child("+(i-1)+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);var e=i-1}$(".introduction .slider .main > div:nth-child("+i+")").stop(true,true).animate({left:"0","z-index":"1"},animation);if(e==1){$(".introduction .slider .preview1 > div:nth-child("+m+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);var t=m}else{$(".introduction .slider .preview1 > div:nth-child("+(e-1)+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);var t=e-1}$(".introduction .slider .preview1 > div:nth-child("+e+")").stop(true,true).animate({top:"0","z-index":"1"},animation);if(t==1){$(".introduction .slider .preview2 > div:nth-child("+m+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation)}else{$(".introduction .slider .preview2 > div:nth-child("+(t-1)+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation)}$(".introduction .slider .preview2 > div:nth-child("+t+")").stop(true,true).animate({left:"0","z-index":"1"},animation);i++}else{$(".introduction .slider .main > div:nth-child("+(i-1)+")").stop(true,true).animate({left:-p1+"px","z-index":"0"},animation).delay(speed).animate({left:p1+"px","z-index":"0"},animation);$(".introduction .slider .main > div:nth-child("+i+")").stop(true,true).animate({left:"0","z-index":"1"},animation);var e=i-1;$(".introduction .slider .preview1 > div:nth-child("+(e-1)+")").stop(true,true).animate({top:h2+"px","z-index":"0"},animation).delay(speed).animate({top:-h2+"px","z-index":"0"},animation);$(".introduction .slider .preview1 > div:nth-child("+e+")").stop(true,true).animate({top:"0","z-index":"1"},animation);var t=e-1;$(".introduction .slider .preview2 > div:nth-child("+(t-1)+")").stop(true,true).animate({left:p2+"px","z-index":"0"},animation).delay(speed).animate({left:-p2+"px","z-index":"0"},animation);$(".introduction .slider .preview2 > div:nth-child("+t+")").stop(true,true).animate({left:"0","z-index":"1"},animation);i=1}},speed);$(window).resize(function(){clearInterval(interval1);i=2})
}
function sideblock() {
	var animation2 = 1000;
	var speed2 = 5000;
	var delay = speed2/2;
	$(".introduction .slider").append('<div class="lside"></div><div class="rside"></div>');$(".introduction .slider .lside, .introduction .slider .rside").html($(".introduction .sub").html());var i2=2;m2=$(".introduction .slider .lside > div").size();var interval2;var timeout2=setTimeout(function(){interval2=setInterval(function(){if(i2<m2){if(i2==1){$(".introduction .slider .lside > div:nth-child("+m2+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);var e=m2}else{$(".introduction .slider .lside > div:nth-child("+(i2-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);var e=i2-1}$(".introduction .slider .lside > div:nth-child("+i2+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);if(e==1){$(".introduction .slider .rside > div:nth-child("+m2+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2)}else{$(".introduction .slider .rside > div:nth-child("+(e-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2)}$(".introduction .slider .rside > div:nth-child("+e+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);i2++}else{$(".introduction .slider .lside > div:nth-child("+(i2-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);$(".introduction .slider .lside > div:nth-child("+i2+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);var e=i2-1;$(".introduction .slider .rside > div:nth-child("+(e-1)+")").stop(true,true).animate({left:p3+"px","z-index":"0"},animation2).delay(speed2).animate({left:-p3+"px","z-index":"0"},animation2);$(".introduction .slider .rside > div:nth-child("+e+")").stop(true,true).animate({left:"0","z-index":"1"},animation2);i2=1}},speed2)},speed2/2);$(window).resize(function(){clearTimeout(timeout2);clearInterval(interval2);i=2})
}
function start() {
	$(".introduction .slider .main > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .preview1 > div:nth-child("+$(".introduction .slider .main > div").size()+")").css({top:"0","z-index":"1"});$(".introduction .slider .preview2 > div:nth-child("+($(".introduction .slider .main > div").size()-1)+")").css({left:"0","z-index":"1"});$(".introduction .slider .lside > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .rside > div:nth-child("+$(".introduction .slider .lside > div").size()+")").css({left:"0","z-index":"1"})
}
function start() {
	$(".introduction .slider .main > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .preview1 > div:nth-child("+$(".introduction .slider .main > div").size()+")").css({top:"0","z-index":"1"});$(".introduction .slider .preview2 > div:nth-child("+($(".introduction .slider .main > div").size()-1)+")").css({left:"0","z-index":"1"});$(".introduction .slider .lside > div:nth-child(1)").css({left:"0","z-index":"1"});$(".introduction .slider .rside > div:nth-child("+$(".introduction .slider .lside > div").size()+")").css({left:"0","z-index":"1"})
}
function team() {
	var animation = 1000;
	var speed = 5000;
	var tw=$(window).width();var th=tw*488/1900;var t1=Math.ceil($(window).width()*960/1900/10)*10;var t2=Math.ceil($(window).width()*450/1900/10)*10;$(".team").css({width:Math.ceil($(window).width()/20)*20+"px",height:th+"px",margin:"0 0 "+Math.ceil(tw*59/1900)+"px "+ -(Math.ceil($(window).width()/20)*20-$(window).width())/2+"px"});$(".team .main").css({width:t1+"px",height:th+"px",left:t2+20+"px",background:'url("'+$(".team .main img").attr("src")+'") no-repeat center center',"-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"});$(".team .pl .container, .team .pr .container").empty();$(".team .pl .container").html($(".team .pl > .temp").html());$(".team .pr .container").html($(".team .pr > .temp").html());$(".team .pr").css({left:t1+t2+40+"px"});$(".team .pl").css({left:"0"});$(".team .pr, .team .pl .container, .team .pl .container > div > div, .team .pl .container > div .single, .team .pr, .team .pr .container, .team .pr .container > div > div, .team .pr .container > div .single").css({width:t2+"px",height:th+"px"});$(".team .pl .container > div .double, .team .pr .container > div .double").css({height:Math.ceil(th/2)-10+"px",margin:"0 0 20px !important"});$(".team .pl .container > div > div, .team .pr .container > div > div").each(function(){$(this).css({background:'url("'+$(this).find("img").attr("src")+'") no-repeat center center',"-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"})});$(".team .pl, .team .pr").slides({generatePagination:false,generateNextPrev:false,container:"container",effect:"slide",slideSpeed:animation,play:speed,pause:0})
}
function portfolio() {
	var animation = 1000;
	var speed = 5000;
	var pw = $(window).width();
	var pl = -(Math.ceil($(window).width() / 20) * 20 - $(window).width()) / 2;
	if (pw > 1720) {
	    var p1 = 960;
	    var p2 = 280;
	    var p3 = 380;
	    var ph = 802;
	    if (ph > $(window).height() - ($(".header").height() + $(".footer").height() + 52)) {
	        ph = $(window).height() - ($(".header").height() + $(".footer").height() + 52)
	    }
	    var wt = 95;
	    var pl = 0
	} else {
	    var p1 = Math.ceil(pw * 960 / 1720 / 10) * 10;
	    var p2 = Math.ceil(pw * 280 / 1720 / 10) * 10;
	    var p3 = Math.ceil(pw * 380 / 1720 / 10) * 10;
	    var ph = pw * 802 / 1720;
	    if (ph > $(window).height() - ($(".header").height() + $(".footer").height() + 52)) {
	        ph = $(window).height() - ($(".header").height() + $(".footer").height() + 52)
	    }
	    var wt = ph * 95 / 802
	}
	if (pw > 1820) {
	    pl = (pw - 1816) / 2
	}
	$(".portfolio").css({
	    height: ph + "px",
	    "margin-left": pl + "px"
	});
	$(".portfolio .main .container").empty();
	$(".portfolio .main .pagination, .portfolio .main .prev, .portfolio .main .next").remove();
	$(".portfolio .main .container").html($(".portfolio .main .temp").html());
	$(".portfolio .main").css({
	    left: p3 + 40 + "px"
	});
	$(".portfolio .main, .portfolio .main .container, .portfolio .main .container > div").css({
	    width: p1 + "px",
	    height: ph + "px"
	});
	$(".portfolio .main, .portfolio .main .container, .portfolio .main .container > div").css({
	    height: ph + "px"
	});
	$(".portfolio .information").css({
	    top: wt + "px",
	    left: "20px",
	    width: p3 + "px"
	});
	$(".portfolio .main .container > div").each(function() {
	    $(this).css({
	        background: 'url("' + $(this).find("img").attr("src") + '") no-repeat center center',
	        "-webkit-background-size": "cover",
	        "-moz-background-size": "cover",
	        "-o-background-size": "cover",
	        "background-size": "cover"
	    })
	});
	$(".portfolio .main").slides({
	    generatePagination: true,
	    generateNextPrev: true,
	    container: "container",
	    effect: "slide",
	    slideSpeed: animation,
	    play: speed,
	    pause: 0
	});
	$(".portfolio .main .pagination").css({
	    left: p1 + 20 + "px",
	    width: p2 + "px"
	});
	$(".portfolio .main .pagination li, .portfolio .main .pagination li a").css({
	    height: Math.ceil((ph - 40) / 3) + "px"
	});
	$(".portfolio .main .pagination li").each(function() {
	    var e = $(this).index() + 1;
	    $(this).find("a").html($(".portfolio .main .temp > div:nth-child(" + e + ")").html())
	});
	$(".portfolio .main .pagination li").each(function() {
	    $(this).css({
	        background: 'url("' + $(this).find("img").attr("src") + '") no-repeat center center',
	        "-webkit-background-size": "cover",
	        "-moz-background-size": "cover",
	        "-o-background-size": "cover",
	        "background-size": "cover"
	    })
	});
	$('span.pp, span.np').remove();
	if ( $('.main .temp > div').size() > 3 ) {
		var steps = $('.main .temp > div').size()-3;
		var current = 0;
		$('.content').append('<span class="pp"></span><span class="np"></span>');
		$('span.pp').css({
			'left': $('.main .pagination').offset().left+p2/2+'px',
			'top': $('.portfolio').offset().top-30+'px'
		});
		$('span.np').css({
			'left': $('.main .pagination').offset().left+p2/2+'px',
			'top': $('.portfolio').offset().top+$('.portfolio').height()+14+'px'
		});
		$('span.pp').bind('click', function() {
			current--;
			if ( current < 0 ) {
				current = steps;
			}
			$('.portfolio .main .pagination').stop(true,true).animate({
				'top': -current*($('.portfolio .main .pagination li').height()+20)+'px'
			}, 250);
			return false;
		});
		$('span.np').bind('click', function() {
			current++;
			if ( current > steps ) {
				current = 0;
			}
			$('.portfolio .main .pagination').stop(true,true).animate({
				'top': -current*($('.portfolio .main .pagination li').height()+20)+'px'
			}, 250);
			return false;
		});
	}
}
$(window).resize(function() {
	if ( $('.introduction').length > 0 ) {
		$(".introduction .slider").empty();
		animation();sideblock();introduction();start()
	}
	if ( $('.team').length > 0 ) {
		team();
	}
	if ( $('.portfolio').length > 0 ) {
		portfolio();
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
	if ( $('.catalog').length > 0 ) {
		$(".catalog > div").masonry({itemSelector:".item"});$(".catalog > div .item").each(function(){$(this).find("a").height($(this).height())});$(".catalog > div .item").hover(function(){$(this).find("a").stop(true,true).fadeIn(500)},function(){$(this).find("a").stop(true,true).fadeOut(500)});$(".catalog > div .item").each(function(){$(this).hoverdir();})
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
		$(".index").addClass("static");$(document).bind("DOMMouseScroll mousewheel",function(e){var t=e.originalEvent.wheelDelta||e.originalEvent.detail*-1;if($(".index.static").length>0){if(t/120>0){$(".index").removeClass("static");$(".index").animate({top:"100%"},1e3,function(){$(".index").addClass("static")})}else{$(".index").removeClass("static");$(".index").animate({top:"0"},1e3,function(){$(".index").addClass("static")})}}})
	}
	var currentnav=$(".header > div > ul li.active").index()+1;$(".header > div > ul li").hover(function(){$(".header > div > ul li").removeClass("active")},function(){$(".header > div > ul li:nth-child("+currentnav+")").addClass("active")})
	if ( $('.team').length > 0 ) {
		team();
	}
	if ( $('.portfolio').length > 0 ) {
		portfolio();
	}
	$("input, textarea").each(function(){$(this).data("holder",$(this).attr("placeholder"));$(this).focusin(function(){$(this).attr("placeholder","")});$(this).focusout(function(){$(this).attr("placeholder",$(this).data("holder"))})});
	$('.header > div > ul li:nth-child(1) a').css({
		'background': 'url("./img/menu_link1.png") no-repeat left top'
	});
	$('.header > div > ul li:nth-child(2) a').css({
		'background': 'url("./img/menu_link2.png") no-repeat left top'
	});
	$('.header > div > ul li:nth-child(3) a').css({
		'background': 'url("./img/menu_link3.png") no-repeat left top'
	});
	$('.header > div > ul li:nth-child(4) a').css({
		'background': 'url("./img/menu_link4.png") no-repeat left top'
	});
});