(function($) {

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
			+ ' ' + settings.endYear
			+ ' ' + settings.endTime; 

		var timeTilTheEnd = function(endTime) {
			var timeLeft = Date.parse(endTime) - Date.now();
			var seconds = Math.floor((timeLeft/1000) % 60);
			var minutes = Math.floor((timeLeft/(1000*60)) % 60);
			var hours = Math.floor((timeLeft/(1000*60*60)) % 24);
			var days = Math.floor((timeLeft/(1000*60*60*24)));

			if (days >= 365) {
			    var years = Math.floor(days/365);
			    days = Math.floor(days % 365);
			};

			return {
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days,
				years: years ? years: null,
			};
		};

		var appendFlipboard = function(timeUnit) {

			var flipBoard = '<div class="flipboard" id="' + timeUnit + '">'
				+ '<div class="flip-wrapper">'
				+ '<div class="flip flip-next"></div>'
				+ '<div class="flip flip-top"></div>'
				+ '<div class="flip flip-top flip-back"></div>'
				+ '<div class="flip flip-bottom"></div>'
				+ '</div></div>';

			countdown.append(flipBoard);
		};

		appendFlipboard('days');
		appendFlipboard('hours');
		appendFlipboard('minutes');
		appendFlipboard('seconds');


		var appendToFlipBoard = function(timeUnit) {
			var timeTilEnd = timeTilTheEnd(endTime);
			countdown.find('#' + timeUnit).find('.flip-top').text(timeTilEnd[timeUnit])
			countdown.find('#' + timeUnit).find('.flip-bottom').text(timeTilEnd[timeUnit])
			countdown.find('#' + timeUnit).find('.flip-back').text(timeTilEnd[timeUnit])
			countdown.find('#' + timeUnit).find('.flip-next').text(timeTilEnd[timeUnit] - 1)	
		};

		setInterval(function() {
			appendToFlipBoard('days');
			appendToFlipBoard('hours');
			appendToFlipBoard('minutes');
			appendToFlipBoard('seconds');
		}, 1000);

		appendToFlipBoard('days');
		appendToFlipBoard('hours');
		appendToFlipBoard('minutes');
		appendToFlipBoard('seconds');

	};

})(jQuery);