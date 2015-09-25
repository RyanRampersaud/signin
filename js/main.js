$('.signin').on('click',function(e){
	$('.modal').fadeIn()
});

$('.close').on('click',function(e){
	$('.modal').fadeOut()
});

$('input').on('click',function(e){
	$('input').addClass('error')
});

$('input').on('click',function(e){
	$('this').removeClass('error')
});