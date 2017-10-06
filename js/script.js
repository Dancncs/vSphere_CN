jQuery(document).ready(function($) {
	// hide .back-top first
	$(".back_to_top").hide();
	
	// fade in .back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back_to_top').fadeIn();
			} else {
				$('.back_to_top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.back_to_top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});