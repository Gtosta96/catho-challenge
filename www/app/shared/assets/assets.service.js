(function(){
    'use strict'

    angular.module('test.assets.service', [])
    .factory('AssetsService', assetsService);

    /**
     * Service responsável disponibilizar assets - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     * @param MockService - Service responsável por disponibilizar Mocks a serem consumidos.
     * @returns getAssets - Função que retorna assets.
     */
    assetsService.$inject = ['MockService'];
    function assetsService(MockService) {
        return {
            getAssets: getAssets
        }
        
        /**
         * Função que recupera assets da service MockService.
         * @param dataArray - Array de dados com informações necessárias para filtrar assets a serem retornados.
         * @return dataArrayClone Array de dados com assets.
         */
        function getAssets(dataArray) {
            var assets = MockService.assets();

            //Clona objeto e atribui assets de acordo com o nome da cidade
            var dataArrayClone = angular.copy(dataArray);
            dataArrayClone.forEach(function(data) {
                data.assets = assets[data.city.toLowerCase()];
            });

            return dataArrayClone;
        }
    }

}());