$(document).ready(function(){
	var flag = false;
	var scroll;
	var contador = 1;
		$(window).scroll(function(){
			scroll = $(window).scrollTop();
			if (scroll > 50) {
				if (!flag) {
				$("#logoimg").css({"margin-left": "80px","margin-top": "5px", "width": "50px", "height": "50px"});
				$("#titulo").css({"margin-top": "5px", "color": "#FFFFFF"});
				flag = true;
				}
			}else{
				if (flag) {
				$("#logoimg").css({"margin-left": "30px","margin-top": "100px", "width": "250px", "height": "250px"});
				$("#titulo").css({"margin-top": "100px", "color": "#607D8B", "font-size": "3em"});
				flag = false;
				}
			}
		});
		$(".bt-menu480").click(function(){
			if (contador ==1) {
				$("#menu").animate({
					left: "0"
				});
				contador = 0;
			}else{
				contador = 1;
				$("#menu").animate({
					left: "-100%"
				});
			}
		});
});