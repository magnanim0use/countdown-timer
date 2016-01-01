/* This jQuery plugin method, titled 'countdown', will be instantiated inside
an anonymous function with parameter $ and ultimately called explicity by jQuery.
This ties the $ symbol used in this function directly with jQuery to disambiguate
the $ symbol's use in other frameworks (e.g. Angular). */
(function($) {

	$.fn.countdown = function(options) {
		/* The selected element will be referenced as 'countdown'
		when nested inside other functions. */
		var countdown = this;

		/* Settings will extend the following default values with any optional
		parameters the developer might use to customize this plugin. */
		var settings = $.extend({
			title: 'End of The Year',
			endYear: '2016',
			endMonth: 'December',
			endDay: '31',
			endTime: '23:59:59',
			flip: true,
			message: 'Happy New Year!!!',
		}, options);

		var endTime = settings.endMonth 
			+ ' ' + settings.endDay
			+ ' ' + settings.endYear
			+ ' ' + settings.endTime; 

		/* This function calculates the units of time between now and the 
		designated ending time. This will be called in a setInterval function later.*/
		var timeTilTheEnd = function(endTime) {
			var timeLeft = Date.parse(endTime) - Date.now();

			/* When the timer is finished, this function will return a string instead
			of an object. */
			if (timeLeft <= 1000) return 'finished!';

			var seconds = Math.floor((timeLeft/1000) % 60);
			var minutes = Math.floor((timeLeft/(1000*60)) % 60);
			var hours = Math.floor((timeLeft/(1000*60*60)) % 24);
			var days = Math.floor((timeLeft/(1000*60*60*24)) % 365);
			var years = Math.floor((timeLeft/(1000*60*60*24*365)));

			return {
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days,
				years: years,
			};
		};

		var title = '<h2>' + settings.title + '</h2>';
		countdown.append(title);

		/* This function sets up the HTML structure of the countdown timer, which
		will be appended to the selected element. */
		var appendFlipboard = function(timeUnit) {
			var flipBoard = '<div class="flipboard" id="' + timeUnit + '">'
				+ '<div class="flip-wrapper">'
				+ '<div class="flip flip-next"><p></p></div>'
				+ '<div class="flip flip-top"><p></p></div>'
				+ '<div class="flip flip-top flip-back"><p></p></div>'
				+ '<div class="flip flip-bottom"></div>'
				+ '<span class="caption">' + timeUnit.toUpperCase() + '</span>'
				+ '</div></div>';

			countdown.append(flipBoard);
		};

		appendFlipboard('years');
		appendFlipboard('days');
		appendFlipboard('hours');
		appendFlipboard('minutes');
		appendFlipboard('seconds');

		var currentValues = timeTilTheEnd(endTime);
		currentValues['seconds'] = null;

		var appendToFlipBoard = function() {

			var timeTilEnd = timeTilTheEnd(endTime);

			/* If the timer is up, the message defined by default or by the user's
			input will be displayed! */
			if (timeTilEnd === 'finished!') {
				countdown.find('.flipboard').empty().append('<h1>' + settings.message + '</h1>');
				return;
			};

			/* For the time being, if the value has changed between the last interval, the flip animation
			will be active. Otherwise, it will appear static. */
			for (var timeUnit in timeTilEnd) {
				if (settings.flip && currentValues[timeUnit] != timeTilEnd[timeUnit] && timeTilEnd[timeUnit] != 0) {
					countdown.find('#' + timeUnit).find('.flip-top').css({
						'animation': 'flip 1000ms ease-in-out infinite',
						'transform-origin': 'bottom',
					}).find('p').text(timeTilEnd[timeUnit]);
					countdown.find('#' + timeUnit).find('.flip-bottom').text(timeTilEnd[timeUnit]);
					countdown.find('#' + timeUnit).find('.flip-back').css({
						'animation': 'flip-back 1000ms ease-in-out infinite',
						'transform-origin': 'top',
					}).text(timeTilEnd[timeUnit] - 1);
					countdown.find('#' + timeUnit).find('.flip-next p').text(timeTilEnd[timeUnit] - 1);
				} else {
					countdown.find('#' + timeUnit).find('.flip-top').css({ 'animation-play-state': 'paused' }).find('p').text(timeTilEnd[timeUnit]);
					countdown.find('#' + timeUnit).find('.flip-back').css({ 'animation-play-state': 'paused' }).text(timeTilEnd[timeUnit]);
					countdown.find('#' + timeUnit).find('.flip-next p').text(timeTilEnd[timeUnit]);
					countdown.find('#' + timeUnit).find('.flip-bottom').text(timeTilEnd[timeUnit]);
				};
			};
			currentValues = timeTilEnd;
		};

		appendToFlipBoard();

		/* The timer will be updated every second. */
		setInterval(function() {
			appendToFlipBoard();
		}, 1000);
	};

})(jQuery);
