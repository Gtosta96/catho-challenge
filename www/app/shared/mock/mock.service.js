(function(){
    'use strict'

    angular.module('test.mock.service', [])
    .factory('MockService', mockService);

    function mockService() {
        return {
            mock: mock
        }
    }

    function mock() {
        return {}
    }

}());