(function(){
    'use strict'

    angular.module('test.assets.service', [])
    .factory('AssetsService', assetsService);

    assetsService.$inject = ['MockService'];
    function assetsService(MockService) {
        return {
            getAssets: getAssets
        }
        
        function getAssets(dataArray) {
            var assets = MockService.assets();

            var dataArrayClone = angular.copy(dataArray);
            dataArrayClone.forEach(function(data) {
                data.assets = assets[data.city.toLowerCase()];
            });

            return dataArrayClone;
        }
    }

}());