$(function(){
		
	//topBtn 감추고/보이기, header의 배경색 바꾸기
	$("#topBtn").fadeOut();
	
	$(window).scroll(function(){
		
		if($(this).scrollTop()>=400){
			$("#topBtn").fadeIn(500);
			$("header").css("background","blue");
		}else{
			$("#topBtn").fadeOut(500);
			$("header").css("background","rgba(0,0,0,0.7)");
		}
	});
	
	//모바일 환경에서 삼선메뉴 클릭시 전체메뉴 보이기/감추기
	//현재의 상태(상선메뉴상태)를 s=1
	//삼선메뉴 클릭시 보이는 상태를 s=0
	var s=1;
	$(".mAllMenu>ul").click(function(){
		$(this).toggleClass("mX");
		
		if(s==1){
			$("nav").stop().animate({right:0},500);
			s=0;
		}else{
			$("nav").stop().animate({right:"-50%"},500);
			s=1;
		}
	});
	
	
	//가로사이즈 자동 인식
	$(window).resize(function(){
		var w=$(window).width();
		
		if(w>=1200){
			$("nav").css({
				"right":"5%",
				"top":"50%",
				"transform":"translateY(-50%)"
			});
		}else{
			$("nav").css({
				"right":"-50%",
				"top":"0",
				"transform":"translateY(0%)"
			});
		}
	});
	
	//주메뉴 클릭 시 해당 페이지로 이동할 때 메뉴 포커스 설정과 부드럽게 이동
	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("on");
		$(this).addClass("on");
		
		$("body").scrollTo($(this).attr("href"),500);
		return false;
	});
	
	$("#topBtn a").click(function(){
		$("body").scrollTo($(this).attr("href"),500);
		return false;
	});
	
	//마우스 스크롤 시 해당페이지 메뉴의 포커스 설정
	$(window).scroll(function(){
		
		// 스크롤 된 화면의 top 값을 구하여 sct변수에 기억
		var sct=$(window).scrollTop();
		
		var menu=$("nav ul li a");
		var content=$("#wrap>section");
		
		if(sct>=content.eq(0).offset().top){
			menu.removeClass("on");
			menu.eq(0).addClass("on");
		}	
		
		if(sct>=content.eq(1).offset().top){
			menu.removeClass("on");
			menu.eq(1).addClass("on");
			$("#about .left").css("left","0");
			$("#about .right").css("right","0");
		}else{
			$("#about .left").css("left","-50%");
			$("#about .right").css("right","-50%");
		}
		
		if(sct>=content.eq(2).offset().top){
			menu.removeClass("on");
			menu.eq(2).addClass("on");
			$("#skills .left").css("transform","scale(1)");
			$("#skills .right").css("transform","scale(1)");
		}else{
			$("#skills .left").css("transform","scale(0)");
			$("#skills .right").css("transform","scale(0)");
		}
		
		if(sct>=content.eq(3).offset().top){
			menu.removeClass("on");
			menu.eq(3).addClass("on");
			$("#project .left").css("height","100%");
			$("#project .right").css("height","100%");
		}else{
			$("#project .left").css("height","0");
			$("#project .right").css("height","0");
		}
		
		if(sct>=content.eq(4).offset().top){
			menu.removeClass("on");
			menu.eq(4).addClass("on");
			$("#contact .left").css("width","45%");
			$("#contact .right").css("width","45%");
		}else{
			$("#contact .left").css("width","0");
			$("#contact .right").css("width","0");
		}
		
	});
});






























