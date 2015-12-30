(function($) {

	$.fn.countdown = function(options) {

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

		var flipBoard = '<div class="flipboard">'
			+ '<div class="flip-wrapper">'
			+ '<div class="flip flip-next"></div>'
			+ '<div class="flip flip-top"></div>'
			+ '<div class="flip flip-top flip-back"></div>'
			+ '<div class="flip flip-bottom"></div>'
			+ '</div></div>';

		this.append(flipBoard);

		var appendToFlipBoard = function() {

		};

		var timeTilEnd = timeTilTheEnd(endTime);
		


	};

})(jQuery);