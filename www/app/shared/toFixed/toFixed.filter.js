(function() {
    'use strict'

    angular.module('test.toFixed.filter', [])
    .filter('ttToFixed', toFixed);

    function toFixed() {
        return function(value, number) {
            return value.toFixed(number);
        }
        
    }
}());