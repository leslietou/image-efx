$(function(){

//crossfade

	function crossFadeMouseOn(){
		$(this).find('img').eq(0).fadeTo(500, 0);
	}

	function crossFadeMouseOff(){
		$(this).find('img').eq(0).fadeTo(400, 1);
	}

	$('.crossfade-frame').hover(crossFadeMouseOn, crossFadeMouseOff);


//slide
	$('.slide-frame').hover(function(){
		$(this).find('img').eq(0).slideUp('slow');
	}, function(){
		$(this).find('img').eq(0).slideDown('fast');
	});


//captionframe

	$('.caption-frame').hover(function(){

		var $p = $(this).find('p'),
			padding = 40,
			height = $p.height();
		$p.animate({bottom: height + padding}, "slow");	
	}, function(){
		$(this).find('p').animate({bottom: 0}, "slow");

	});








});

