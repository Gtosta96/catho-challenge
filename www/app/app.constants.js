(function() {
	'use strict'

	angular.module('test.constants', [])
	.constant("OPEN_WEATHER", openWeather());

	function openWeather() {
		return {
			APP_ID: '82714a9715df3de6613f994f893d6744',
			CITIES_ID: {
				SOROCABA: 6322598,
				OSASCO: 3455775,
				SANTOS: 3449433
			}
		}
	}

}());