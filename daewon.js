// JavaScript Document
$(document).ready(function(){
		var url=document.location.href+"index.html";
	//alert(url);
	$('.intro').hide();
	$('.intro_btn').hide();
	$('.wrap').addClass('top');
	$('header').css('background-color','#ffffff');
	$('nav').show();
	
	//index.html
	if(url=="http://subin1810.dothome.co.kr/index.html")
	/*if(window.location.pathname===
	"/index.html" || window.location.pathname=="/")*/{
	$('.intro').show();
	$('.intro_btn').hide();
	$('.wrap').removeClass('top');
	$('header').css('background-color','transparent');
	$('nav').hide();
	//intro
	$(window).scroll(function(){
		var win_top=$(window).scrollTop();
		var win_height=$(window).height();
		if(win_top>win_height){
			$('.intro').hide();
			$('.wrap').addClass('top');
			$('header').css('background-color','#ffffff');
			$('nav').fadeIn();
			$('.intro_btn').fadeIn();
		}
	});
	//팝업 열기 버튼 클릭
	$('.intro_btn').click(function(){
		$('html, body').animate({scrollTop:0}, 100, function(){
			$('.intro').show();
			$('.wrap').removeClass('top');
			$('header').css('background-color','transparent');
			$('nav').hide();
			$('.intro_btn').hide();
		});
	});
	
	}
	//메인 메뉴에 마우스 올리면 서브메뉴 나옴.
	$('.nav > ul > li').hover(function(){
		$('.sub').stop().slideDown();
		$('.sub_bg').stop().slideDown();
	//});
	},
	function(){
		$('.sub').stop().slideUp();
		$('.sub_bg').stop().slideUp();
	});
	
	var slide=$('.main > ul');
	var slide_li=slide.find('>li');

	var len=slide_li.length;
	var current=0;
	var first=slide_li.filter(':first');
	var last=slide_li.filter(':last');
	last.after(first.clone(true));
	first.before(last.clone(true));
	$('.main > a.next').click(function(e){
		e.preventDefault();
		slide.animate({'left':'-=1920'}, 500, function(){
			current++;
			if(current>=len){
				current=0;
				slide.css('left',-1920);
			}
			btnFn(current);
		});
	});
	$('.main > a.prev').click(function(e){
		e.preventDefault();
		slide.animate({'left':'+=1920'},500, function(){
			current--;
			if(current<0){
				current=len-1;
				slide.css('left',-1920*len);
			}
			btnFn(current);
		});
	});
	$('.btn ul li').click(function(){
		var num=$(this).index()+1;
		current=num-1;
		slide.animate({'left':-(num*1920)});
		btnFn(current);
	});
	var auto=setInterval(autofn,4000);
	$('.main').hover(function(){
		clearInterval(auto);
	});
	$('.main').mouseleave(function(){
		auto=setInterval(autofn,3000);
	});
	function autofn(){
		$('.main > a.next').click();
	}
	function btnFn(num){
		$('.btn ul li').each(function(){
			if(num==$(this).index()){
				$('.btn ul li').removeClass('active');
				$(this).addClass('active');
			}
		});
	}
	
	//배너2
	var ban2Num=1;
	var ban2length=3;
	
	$('.wrap_business .business_btn .btn_left').on('click',function(e){
		e.preventDefault();
		if(ban2Num<=0){
			ban2Num=3;
		}else{
			ban2Num=ban2Num-1;
		};
		bannerMotion2(ban2Num);
	});
	$('.wrap_business .business_btn .btn_right').on('click',function(e){
		e.preventDefault();
		if(ban2Num==ban2length){
			ban2Num=1;
		}else{
			ban2Num=ban2Num+1;
		};
		bannerMotion2(ban2Num);
	});
	
	function bannerMotion2(pageing){
		var num=pageing;
		var $box=$('.wrap_business .group_cont > .cont_'+num);
		var $bg=$('.wrap_business > .bg > .img_'+num);
		//$('.wrap_business .group_cont > div').css('display','none');
		$box.css('display','black');
		$('.wrap_business > .bg > div').css('z-index','');
		$bg.css('z-index',2);
		
			var $box={
					e0: $box.find('.h2')
					, e1: $box.find('.box_thumb')
				};
			TweenMax.set($bg, {opacity:0});
			TweenMax.set($box.e0, {opacity:0, y:-20});
			
				TweenMax.to($bg, 0.4, {opacity:1});
				TweenMax.to($box.e0, 0.4, {opacity:1, y:0, delay:0.2});
	}//bannerMotion2
	
	/*business*/
	/*var business_num=0;
	var len=$('.business > ul > li').length;
	$('.business > ul > li').hide();
	$('.business > ul > li:first').show();
	
	$('.business a.left').click(function(e){
		e.preventDefault(); /*a태그의 기본 속성을 막는다.*/
		/*business_num--;
		if(business_num<0){
			business_num=len-1;
		}
		$('.business > ul > li').each(function(){
			if(business_num==$(this).index()){
				$('.business > ul > li').hide();
				$(this).fadeIn(500, function(){
				$(this).find('li').addClass('active');
				});
				}else{
					$(this).find('li').removeClass('active');
					$('.business ul li').removeClass('active');
				}
		});
	});
	$('.business a.right').click(function(e){
		e.preventDefault();
		business_num++;
		if(business_num>len-1){
			business_num=0;
		}
		$('.business > ul > li').each(function(){
			if(business_num==$(this).index()){
				$('.business > ul > li').hide();
				$(this).fadeIn(500, function(){
				$(this).find('li').addClass('active');
				});
				}else{
					$(this).find('li').removeClass('active');
				}
		});
	});*/
	//photo banner, business banner, brand banner animation
	var photo_li=$('.photo ul li');
	var brand_li=$('.brand ul li');
	//var business_li=$('.business ul li');
	
	$(window).scroll(function(){
		//isInView라는 함수 호출해서 그 결과값이 true라면 if {}의 명령문 실행
		if(isInView($('.photo'))){
			photo_li.addClass('active');
		}else{
			photo_li.removeClass('active');
		}
		if(isInView($('.brand'))){
			brand_li.addClass('active');
		}else{
			brand_li.removeClass('active');
		}
		/*if(isInView('.business ul li')){
			business_li.addClass('active');
		}else{
			business_li.removeClass('active');
		}*/
	});
	//함수 선언, element:매개변수
	function isInView(element){
		//윈도우화면의 맨 꼭대기값을 docViewTop변수에 저장
		var	docViewTop=$(window).scrollTop();
		//윈도우화면의 높이+윈도우화면의 scrollTop값을 더해서 docViewBottom변수에 저장
		var docViewBottom=docViewTop+$(window).height();
		//element변수에 들어있는 콘텐츠(객체)영역의 offset().top값을 elemTop변수에 저장
		//offset().top:윈도우의 scrollTop에서부터 콘텐츠(객체)의 top까지의 거리
		var elemTop=$(element).offset().top;
		//콘텐츠(객체)의 offset().top값에 콘텐츠(객체)의 높이값을 더해서 elemBottom변수에 저장
		if(element=='.business ul li'){
			var elemTop=$(element).offset().top+500;
		}
		//var elemBottom=elemTop+$(element).height();
		//return ((elemBottom<=docViewBottom) && (elemTop >= docViewTop));
		return (elemTop <= docViewBottom);
	}*/
	//product
	$('.pr_list ul li').hover(function(){
		var pr_num=$(this).index();
		$('.pr_fadein ul li').each(function(){
			var pr_index=$(this).index();
			if(pr_num==pr_index){
				$('.pr_fadein ul li').removeClass('active');
				$(this).addClass('active');
			}
		});
		$('.pr_slide ul li').each(function(){
			var pr_index=$(this).index();
			if(pr_num==pr_index){
				$('pr_slide ul li').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
});