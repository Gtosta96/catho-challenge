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
