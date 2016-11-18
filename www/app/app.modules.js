angular.module('test',
	[
		'test.run',
		'test.constants',
		'test.routes',

		'test.home.controller',
		
		'test.home.service',
		'test.rest.service',
		'test.share.service',
		'test.mock.service',
		
		'ui.router',
	]);
