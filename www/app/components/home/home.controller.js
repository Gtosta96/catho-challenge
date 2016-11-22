(function(){
    'use strict'
    
    angular.module('test.home.controller', [])
    .controller('HomeController', homeController);

    /**
     * Controller responsável por exibir e requisitar informações para construção da tela - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     * @param WeatherForecastService - Service responsável por recuperar informações da API OpenWeather.
     * @param AssetsService - Service responsável por recuperar assets utilizados na aplicação.
     */
    homeController.$inject = ['WeatherForecastService', 'AssetsService'];
    function homeController(WeatherForecastService, AssetsService) {

        var vm = this;
        vm.data;

        getData();
        
        /**
         * Função responsável por requisitar dados através da service WeatherForecastService
         */
        function getData() {
                WeatherForecastService.getAllWeatherForecasts()
                .then(getAssets)
                .catch(onFail);

                /**
                 * Função responsável por recuperar assets e atribuir ao virtual model através da service AssetsService
                 * @param xhr - Resposta da service AssetsService.
                 */
                function getAssets(xhr) {
                    vm.data = AssetsService.getAssets(xhr);
                } 

            /**
             * Função responsável por controlar requisições falhas.
             * @param xhr - Resposta falha da api OpenWeather
             */
                function onFail(xhr) {
                    console.log(xhr);
                }
            }            
        }
}());