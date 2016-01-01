$(document).ready(function() {

	$('#end-of-year').countdown({
		title: 'End of the Day Today!!',
		endYear: '2016',
		endTime: '23:59:59',
		endMonth: 'January',
		endDay: '01',
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