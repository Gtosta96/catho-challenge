(function(){
    'use strict'

    angular.module('test.home.controller', [])
    .controller('HomeController', homeController);

    homeController.$inject = ['HomeService', 'MockService'];
    function homeController(HomeService, MockService) {

        var vm = this;
        vm.data;

        getData();

        function getData() {
                HomeService.getAllWeatherForecasts()
                .then(onDone)
                .catch(onFail);

                function onDone(xhr) {
                    vm.data = xhr;
                } 

                function onFail(xhr) {
                    console.log(xhr);
                    //AlertService.httpError(xhr);
                }
            }            
        }
        
}());