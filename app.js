$(document).ready(function() {

	$('#end-of-year').countdown();

	$('#end-of-decade').countdown({
		title: 'End of The Decade',
		endYear: '2019',
		message: 'Welcome to the roaring 20s',
	});

	$('#end-of-century').countdown({
		title: 'End of the Century',
		endYear: '2099',
		message: 'The End of An Era',
		flip: true,
	});

});