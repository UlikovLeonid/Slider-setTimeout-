autoSlider();
var left = 0;
var timer;

function autoSlider() {
	timer = setTimeout(function () {
		let line = document.getElementById('line');
		left = left - 800;
		if (left < -5600) {
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 3000);
}





