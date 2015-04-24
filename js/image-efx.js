$(function(){

//crossfade

	function crossFadeMouseOn(){
		$(this).find('.front').fadeTo(500, 0);
	}

	function crossFadeMouseOff(){
		$(this).find('.front').fadeTo(400, 1);
	}

	$('.crossfade-frame').hover(crossFadeMouseOn, crossFadeMouseOff);


//slide
	$('.slide-frame').hover(function(){
		$(this).find('.top').slideUp('slow');
	}, function(){
		$(this).find('.top').slideDown('fast');
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

