(function(){
	'use strict'

	angular.module('test.routes', ['ui.router'])
	.config(config);

	function config($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/components/home/home.view.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})
	};

}());
