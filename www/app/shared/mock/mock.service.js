(function(){
    'use strict'

    angular.module('test.mock.service', [])
    .factory('MockService', mockService);

    function mockService() {
        return {
            assets: assets
        }

        function assets() {
            return {
                'curitiba': {
                    backgrounds: [
                        'curitiba-background.jpg'
                    ]
                },
                'florianopolis': {
                    backgrounds: [
                        'florianopolis-background.jpg'
                    ]
                },
                'santos': {
                    backgrounds: [
                        'santos-background.jpg'
                    ]
                },
            }
        }
    }

}());