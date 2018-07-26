// JavaScript Document
$(document).ready(function(e) {
	$('.sub_style .information div a').click(function(e){
		//아이콘 클릭
		e.preventDefault();
		$(this).next().fadeIn();//show
	});
	//close버튼 클릭
	$('.sub_style .information div .popArea .close').click(function(){
		$(this).parent('div').hide();
	});
	//드래그 기능 사용하기
	var offsetX01=0;
	var offsetY01=0;
	var offsetX02=0;
	var offsetY02=0;
	// class^=info => 클래스 이름에 info글자가 포함되어 있는 객체 선택하기.
	$('div[class^=info]').each(function(){
		//draggable:메서드 delay:지연시간
		$(this).draggable({delay:0, distance:0 },{
			//drag이벤트 설정
			drag:function(event, ui){
				console.log(ui);
				offsetX01=9;
				offsetY01=9;
				offsetX02=68;
				offsetY02=71;
				
				var target=$(this).index()+1;
				var x1=$('.box0'+target+'').offset().left+offsetX01;
				var x2=$(this).offset().left+offsetX02;
				var y1=$('.box0'+target+'').offset().top+offsetY01;
				var y2=$(this).offset().top+offsetY02;
				
				var ht=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
				var angle=Math.atan2((y1-y2), (x1-x2))*(180/Math.PI);
				
				if(angle>=90 && angle<180){
					y1=y1-(y1-y2);
				}
				
				if(angle>0 && angle<90){
					x1=x1-(x1-x2);
					y1=y1-(y1-y2);
				}
				if(angle<=0 && angle>-90){
					x1=x1-(x1-x2);
				}
				
				$('.d0'+target+'').queue(function(){
					$(this).offset({top:y1,left:x1});
					$(this).dequeue();
				}).queue(function(){
					$(this).width(ht);
					$(this).dequeue();
				}).queue(function(){
					$(this).rotate(angle);
					$(this).dequeue();
				});
			}
		});
	});
});