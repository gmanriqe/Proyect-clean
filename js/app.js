jQuery(document).ready(function($) {

	$('#menu-handler').on('click', function () {

		// $(this).toggleClass('icon-close');

		// fadeOut-The jQuery fadeOut() method is used to fade out a visible element.
		// fadeIn-The jQuery fadeIn() method is used to fade in a hidden element.

		$(this).fadeOut(300, function() {
			$(this).toggleClass('icon-close').fadeIn(300);
		});


		$('nav').toggleClass('displayed');

		//JS for menu (item portfolio)
	});

});