$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('.lock');
	});
	$('a.header__link').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});

	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{	
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			},
			{	
				breakpoint: 0,
				settings: {
					slidesToShow:1
				}
			}
		]
	});


/*плавный переход к секции*/

	$('.header__list a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
			dn = $(sc).offset().top;
		$('html, body').animate({
			scrollTop: dn
		}, 600);
	});

/*плавные табы*/

	$('body').on('click','.tabs__item a',function() {
		$('.tabs__item a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.tab__pane').removeClass('active').removeClass('in');
		var id = $(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('in');
		}, 200);
		return false;
	});

/*открытие скрытых блоков*/

	$('#more-btn-one').click(function(e) {
		e.preventDefault();
		$('#more-text-one',).toggle(200);
	});
	$('#more-btn-two').click(function(e) {
		e.preventDefault();
		$('#more-text-two',).toggle(200);
	});

	$('.clients-slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
	});

/*кнопка наверх*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-up').fadeIn();
		}else {
			$('#scroll-up').fadeOut();
		}
	});
	$('#scroll-up').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});