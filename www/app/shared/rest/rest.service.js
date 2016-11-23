(function() {
	'use strict'

	angular.module('test.rest.service', ['ngResource'])
	.factory('RestService', restService);

    /**
     * Service responsável disponibilizar RESTs a serem consumidos - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
	 * @param {Object} $resource - Injeção Angular $resource.
     * @returns getWeatherForecast - Função que recupera dados da API OpenWeather.
     */
	restService.$inject = ['$resource'];
	function restService($resource) {
		return {
			getWeatherForecast: getWeatherForecast()
		};

		/**
         * Função requisita dados da API OpenWeather
         * @return Object - Dados retornados da API OpenWeather.
         */
		function getWeatherForecast(params) {
			return $resource('http://api.openweathermap.org/data/2.5/forecast', {params: '@params'});	
		};
	};

})();