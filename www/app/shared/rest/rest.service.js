(function() {
	'use strict'

	angular.module('test.rest.service', ['ngResource'])
	.factory('RestService', restService);

	restService.$inject = ['$resource'];
	function restService($resource) {
		return {
			getWeatherForecast: getWeatherForecast()
		};

		function getWeatherForecast(params) {
			return $resource('http://api.openweathermap.org/data/2.5/forecast', {params: '@params'});	
		};
	};

})();