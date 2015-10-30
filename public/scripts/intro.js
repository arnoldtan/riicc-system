$(document).ready(function() {
	introAnimation();
});

var introAnimation = function() {
	var typeList = [
		function() {
			$('#raffles-institution').typed({
				stringsElement: $('#raffles-institution-text'),
				typeSpeed: 20
			});
		},
		function() {
			$('#infocomm').typed({
				stringsElement: $('#infocomm-text'),
				typeSpeed: 90
			});
		},
		function() {
			$('#club').typed({
				stringsElement: $('#club-text'),
				typeSpeed: 96
			});
		}
	];

	var showList = [$('#build'), $('#code'), $('#design')];

	var clearScreen = function() {
		$('body').animate({
			backgroundColor: '#FFF'
		}, 1500);
		setTimeout(function() { location.href = '/index'; }, 1500);
	}

	var nextShow = function(i) {
		if (i === showList.length) return setTimeout(function() { clearScreen(); }, 1000);
		showList[i].fadeTo(1000, 1);
		setTimeout(function() { nextShow(i+1) }, 1000);
	};

	(function nextType(i) {
		if (i == typeList.length) return setTimeout(function() { nextShow(0) }, 500);
		typeList[i]();
		setTimeout(function() { nextType(i+1) }, 1000);
	})(0);
};