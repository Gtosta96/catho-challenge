(function(){
	'use strict'

	/**
     * Módulo responsável por controlar rotas e controllers da aplicação. - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     */	
	angular.module('test.routes', ['ui.router'])
	.config(config);

	/**
	 * Função responsável por provar configurações da aplicação.
	 * @param $stateProvider - Injeção Angular $stateProvider.
	  * @param $urlRouterProvider - Injeção Angular $urlRouterProvider.
	 * @return Object - Dados a serem consumidos pela API OpenWeather.
	 */
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
