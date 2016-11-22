(function(){
    'use strict'

    /**
     * Service responsável disponibilizar mocks - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     * @returns getAssets - Função que retorna mock de assets.
     */
    angular.module('test.mock.service', [])
    .factory('MockService', mockService);

    function mockService() {
        return {
            assets: assets
        }

        /**
         * Função que retorna objeto com assets
         * @return Object - Array de dados mockados.
         */
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