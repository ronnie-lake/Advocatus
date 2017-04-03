$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 60) {
			$('.header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	})

	$('.viewport__item').click(function(){
		if($(this).is(':last-child')) {
			$(this).removeClass('active');
			$('.viewport__item:first-child').addClass('active');
			$('.nav__item:last-child').removeClass('active');
			$('.nav__item:first-child').addClass('active');
		} else {
			var activeNav = $('.nav__item.active');
			$(this).removeClass('active');
			$(this).next().addClass('active');
			activeNav.removeClass('active');
			activeNav.next().addClass('active');
		}
	})

	$('.nav__item').click(function(){
		var navNumber = $(this).index() + 1;
		$('.nav__item.active').removeClass('active');
		$(this).addClass('active');
		var activeItem = $('.viewport__item:nth-child(' + navNumber + ')');
		$('.viewport__item.active').removeClass('active');
		$(activeItem).addClass('active');
	})

	$('.question__token').click(function(){
		if($(this).parent().is('.active')) {
			$('.question').css('display', 'block');
			$('.question__item.active').removeClass('active');
			$('.descript__item.active').removeClass('active');
		} else {
			var questNumber = $(this).parent().index() + 1;
			$('.question').css('display', 'inline-block');
			$('.question__item.active').removeClass('active');
			$(this).parent().addClass('active');
			$('.descript__item.active').removeClass('active');
			$('.descript__item:nth-child(' +questNumber+ ')').addClass('active');
		}
	})
})