$(() => {
	let banner = $('.banner');
	let slide = banner.children('li');
	const total = slide.length;
	let num = 0;
	const showNum = 3;
	const liW = slide.width();
	const copyObj = $('li', banner).slice(0, showNum).clone();
  console.log(copyObj);
	$('.next').on('click', function () {
		if (num == total) {
			num = 0;
			banner.css('margin-left', 0);
		}
		num++;
		banner.stop().animate({ marginLeft: -liW * num }, 500);
		return false;
	});
	$('.prev').on('click', function () {
		if (num == 0) {
			console.log(total);
			num = total;
			banner.css('margin-left', -liW * num);
		}
		num--;
		banner.stop().animate({ marginLeft: -liW * num }, 500);
		return false;
	});
});
