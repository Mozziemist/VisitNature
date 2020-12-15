const observer = lozad();
observer.observe();

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

function getLocation(dest){

	var startPos;

	var geoSuccess = function(position) {

		// Do magic with location
		startPos = position;
		
		window.open("https://www.google.com/maps/dir/?api=1&origin=" + startPos.coords.latitude + ',' + startPos.coords.longitude + "&destination=" + dest);
	};
	var geoError = function(error) {
		
		console.error(error);
		window.open("https://www.google.com/maps/dir//" + dest);
	};

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}