(function() {
    'use strict'

    /**
     * Filtro responsável arredondar casas decimais - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     */
    angular.module('test.toFixed.filter', [])
    .filter('ttToFixed', ttToFixed);

    function ttToFixed() {
        return function(value, number) {
            return value.toFixed(number);
        } 
    }
    
}());