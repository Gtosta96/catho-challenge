(function() {
	'use strict'

    /**
     * Módulo principal da aplicação, responsável por carregar todos os outros módulos. - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     */	
	angular.module('test',
	[
		'test.run',
		'test.constants',
		'test.routes',

		'test.home.controller',

		'test.weatherForecast.service',
		'test.rest.service',
		'test.assets.service',
		'test.mock.service',

		'test.setBackground.directive',

		'test.toFixed.filter',

		'ui.router',
		'angularMoment',
		'angular-carousel'
	]);

}());
