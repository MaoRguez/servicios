$(document).ready(function(){
	var flag = false;
	var scroll;
		$(window).scroll(function(){
			scroll = $(window).scrollTop();
			if (scroll > 50) {
				if (!flag) {
				$("#logoimg").css({"margin-left": "80px","margin-top": "5px", "width": "50px", "height": "50px"});
				$("header").css({"background-color": "rgba(97, 97, 97, 0.9)", "width": "100%"});
				$(".a").css({"color": "#FFFFFF"});
				$("#titulo").css({"margin-top": "5px", "color": "#FFFFFF"});
				flag = true;
				}
			}else{
				if (flag) {
				$("#logoimg").css({"margin-left": "30px","margin-top": "100px", "width": "250px", "height": "250px"});
				$("header").css({"background-color": "transparent", "width": "100%"});
				$(".a").css({"color": "#607D8B"});
				$("#titulo").css({"margin-top": "100px", "color": "#607D8B", "font-size": "3em"});
				flag = false;
				}
			}
		});
});