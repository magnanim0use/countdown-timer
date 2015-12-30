(function(?) {

	$.fn.countdown = function(options) {

		var countdown = this;

		var settings = $.extend({
			endYear: '2015',
			endMonth: 'December',
			endDay: '31',
			endTime: '23:59:59',
		}, options);

		var endTime = settings.endMonth 
			+ ' ' + settings.endDay
			+ ' ' + settings.endTime; 

		var timeTilTheEnd = function(endTime) {
			var timeLeft = Date.parse(endTime) - Date.now();
			var seconds = Math.floor((timeLeft/1000) % 60);
			var minutes = Math.floor((timeLeft/(1000*60)) % 60);
			var hours = Math.floor((timeLeft/(1000*60*60)) % 24);
			var days = Math.floor((timeLeft/(1000*60*60*24)));
			return {
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days,
			};
		};

		console.log(timeTilEnd(endOfYear));

	};

})(jQuery);