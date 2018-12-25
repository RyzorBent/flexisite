/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/




(function ($) {
	
	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});
	
	// Back Top Link
	
	
	
	var offset = 200;
	var duration = 500;
	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(400);
		} else {
			$('.back-to-top').fadeOut(400);
		}
	});
	
	$('.back-to-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	$("#myBtn").on('click',function() { 
			event.preventDefault();
			const emailTxt = $("#emailTxt").val();
			const validEmail = validateEmail(emailTxt);
	
			if (validEmail) {
				console.log("email valid");
				$('#myBtn').prop('disabled', false);
				$('#contactForm').attr('data-netlify', 'true');
			  } else {
				$("#emailTxt").css({ color: "red" });
				$('#contactForm').removeAttr('data-netlify');
				return;
			  }
		});
			function validateEmail(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			}

	$('#emailTxt').keyup(){
		$("#emailTxt").css({ color: "black" });
	}

	function openForm() {
		document.getElementById("myForm").style.display = "block";
		console.log('displayed...');
	}

	

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
	}

	//  $('.back-to-services').on('click',function(event) {
	// 	event.preventDefault();
	// 	$('html, body').animate({
	// 	  scrollTop: 0
	// 	}, 600);
	// 	return false;
	//   })

	$(function () {

		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Off-Canvas Navigation.

		// Navigation Panel.
		$(
			'<div id="navPanel">' +
			$('#nav').html() +
			'<a href="#navPanel" class="close"></a>' +
			'</div>'
		)
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left'
			});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
			$('#navPanel')
				.css('transition', 'none');

	});

})(jQuery);
