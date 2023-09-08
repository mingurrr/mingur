//슬라이드를 감싸는 부모를 제이쿼리 객체로 만든다
//bxSlider() 함수를 적용한다
$('.basic_slider').bxSlider({
	mode: 'vertical',
	speed: 500,
	auto: true,
	autoHover: true,
});

$('.img_ctl_slider').bxSlider({
	nextSelector: '.img_ctl .next',
	prevSelector: '.img_ctl .prev',
	/* multiple */
	minSlides: 1,
	maxSlides: 4,
	moveSlides: 2,
	slideWidth: 200,
	slideMargin: 30,
	auto: true,
});
$('.responsive_slider').bxSlider({
	minSlides:1,
	maxSlides:1,
	slideWidth: 800,
	slideMargin:30,
	auto:true,
});
$('.bxslider').bxSlider({
	minSlides: 4,
	maxSlides: 4,
	slideWidth: 170,
	slideMargin: 10,
	ticker: true,
	speed: 9000
  });