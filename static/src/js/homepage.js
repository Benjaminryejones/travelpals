$(document).ready(function() {
	$('.home-wrapper').css('min-height', $(window).height()+'px');
	$('.home-wrapper').css('min-width', $(window).width()+'px');
	$(window).resize(function() {
		$('.home-wrapper').css('min-height', $(window).height()+'px');
		$('.home-wrapper').css('min-width', $(window).width()+'px');
		$('.home-wrapper').css('background-size', $(window).width()+'px'+$(window).height()+'px');
	});

	$('#learn-more-button').click(function() {
		if( $('#learn-more-form').css('display') != 'flex') {
			$('#learn-more-form').css('display','flex')
			$('#learn-more-form').hide()
			$('#learn-more-form').fadeIn();
		} else {
			$('#learn-more-form').fadeOut();
		}
	});

	$('#contact-button').click(function() {
		if( $('#contact-form').css('display') != 'flex') {
			$('#contact-form').css('display','flex')
			$('#contact-form').hide()
			$('#contact-form').fadeIn();
		} else {
			$('#contact-form').fadeOut();
		}
	});
});