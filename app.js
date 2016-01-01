$(document).ready(function() {

	$('#end-of-year').countdown({
		flip: false,
	});

	$('#end-of-decade').countdown({
		title: 'End of The Decade',
		endYear: '2019',
		flip: false,
	});

	$('#end-of-century').countdown({
		title: 'End of the Century',
		endYear: '2099',
	});

});