(function(){
    'use strict'

    angular.module('test.home.controller', [])
    .controller('HomeController', homeController);

    homeController.$inject = ['WeatherForecastService', 'AssetsService'];
    function homeController(WeatherForecastService, AssetsService) {

        var vm = this;
        vm.data;

        getData();

        function getData() {
                WeatherForecastService.getAllWeatherForecasts()
                .then(getAssets)
                .catch(onFail);

                function getAssets(xhr) {
                    vm.data = AssetsService.getAssets(xhr);
                } 

                function onFail(xhr) {
                    console.log(xhr);
                }
            }            
        }
}());