$(document).ready(function(){
	if($(this).scrollTop() > 60) {
		$('.header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 60) {
			$('.header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	})

	$('.viewport__item').click(function(){
		if($(this).is(':last-child')) {
			$(this).hide().removeClass('active');
			$('.viewport__item:first-child').fadeIn().addClass('active');
			$('.nav__item:last-child').removeClass('active');
			$('.nav__item:first-child').addClass('active');
		} else {
			var activeNav = $('.nav__item.active');
			$(this).hide().removeClass('active');
			$(this).next().fadeIn().addClass('active');
			activeNav.removeClass('active');
			activeNav.next().addClass('active');
		}
	})

	$('.nav__item').click(function(){
		var navNumber = $(this).index() + 1;
		$('.nav__item.active').removeClass('active');
		$(this).addClass('active');
		var activeItem = $('.viewport__item:nth-child(' + navNumber + ')');
		$('.viewport__item.active').hide().removeClass('active');
		$(activeItem).fadeIn('fast').addClass('active');
	})

	$('.question__token').click(function(){
		if($(this).parent().is('.active')) {
			$('.question').css('display', 'block');
			$('.question__item.active').removeClass('active');
			$('.descript__item.active').hide().removeClass('active');
		} else {
			var questNumber = $(this).parent().index() + 1;
			$('.question').css('display', 'inline-block');
			$('.question__item.active').removeClass('active');
			$(this).parent().addClass('active');
			$('.descript__item.active').hide().removeClass('active');
			$('.descript__item:nth-child(' +questNumber+ ')').fadeIn('fast').addClass('active');
		}
	})
})