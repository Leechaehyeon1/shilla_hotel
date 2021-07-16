$(document).ready(function(){
	// swiper
	var swiper = new Swiper('.main_slide', {
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction : false
		},
		navigation: {
			prevEl: '.main_slide .prev',
			nextEl: '.main_slide .next',
		},
		pagination: {
			el: '.fraction',
			type: 'fraction',
		},
	});

	var menu = ['Dining', 'Lounge & Bar', 'Business'];
	var swiper = new Swiper('.brand_slide', {
		speed: 1000,
		loop: true,
		navigation: {
			prevEl: '.brand_slide_wrap .prev',
			nextEl: '.brand_slide_wrap .next',
		},
		pagination: {
			el: '.brand_nav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (menu[index]) + '</span>';
			},
		},
	});

	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});
});

	var topBtn = $('.top_btn');
	// scroll Event
	$(window).on('scroll', function(){
	var current = $(this).scrollTop();
	var header = $('.header');

	if(current > 0){
		header.addClass('on');
	} else {
		header.removeClass('on');
	}

	if($(this).scrollTop() > ($(window).innerHeight() / 2)){
		topBtn.addClass('on');
	} else {
		topBtn.removeClass('on');
	}

});

// go-to-top event
topBtn.on('click', function(){
	$('html,body').animate({scrollTop:0}, 1000);
});

// footer
var familySite = $('.family_site .group');

familySite.on('click', function(e){
	e.preventDefault();

	$(this).siblings('.family_list').toggleClass('on');
});