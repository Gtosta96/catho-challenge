(function(){
	'use strict'

	/**
     * Módulo responsável rodar configurações da aplicação. - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     */	
	angular.module('test.run', [])
	.run(run);

	function run(amMoment) {
		amMoment.changeLocale('pt-br');
	};

}());
