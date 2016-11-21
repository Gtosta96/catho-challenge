(function() {
	'use strict'

	angular.module('test.constants', [])
	.constant("OPEN_WEATHER", openWeather());

	function openWeather() {
		return {
			APP_ID: '82714a9715df3de6613f994f893d6744',
			UNITS: 'metric',
			LANG: 'pt',
			CITIES_ID: {
				FLORIANOPOLIS: 3463237,
				CURITIBA: 6322752,
				SANTOS: 3449433
			}
		}
	}

}());