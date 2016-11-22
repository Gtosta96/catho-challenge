(function() {
	'use strict'

    /**
     * Constantes da aplicação - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     */	
	angular.module('test.constants', [])
	.constant("OPEN_WEATHER", openWeather());

	/**
	 * Função que retorna dados a serem consumidos pela API OpenWeather.
	 * @return Object - Dados a serem consumidos pela API OpenWeather.
	 */
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