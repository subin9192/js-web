// JavaScript Document
$(document).ready(function(e) {
	$('.map_item:first').show();
	$('.map_title ul li').click(function(){
		var mapNum=$(this).index();
		$('.map_item').hide();
		$('.map_item').eq(mapNum).fadeIn();
	});
});