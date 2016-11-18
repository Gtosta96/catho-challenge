(function() {
    'use strict'

    angular.module('test.home.service', [])
    .factory('HomeService', homeService);

    homeService.$inject = ['$q', 'OPEN_WEATHER', 'RestService'];
    function homeService($q, OPEN_WEATHER, RestService) {
        return {
            getWeatherForecastById: getWeatherForecastById,
            getAllWeatherForecasts: getAllWeatherForecasts
        }

        function getWeatherForecastById(cityId) {
            //TODO
        }

        function getAllWeatherForecasts() {
            
            //TOFIX: VERIFICAR COMO PUXAR CONSTANT
            const OPEN_WEATHER = {
                APP_ID: '82714a9715df3de6613f994f893d6744',
                CITIES_ID: {
                    SOROCABA: 6322598,
                    OSASCO: 3455775,
                    SANTOS: 3449433
                }
            }

            var citiesId = OPEN_WEATHER.CITIES_ID;
            var promises = Object.keys(citiesId).reduce(function(prev, cur, index) {
                var params = { id: citiesId[cur], appId: OPEN_WEATHER.APP_ID };
                prev[index] = RestService.getWeatherForecast.get(params).$promise;

                return prev;
            }, []);

            return $q.all(promises)
                .then(onDone)
                .catch(onFail);

            function onDone(xhr) {
                return xhr;
            }

            function onFail(xhr) {
                console.log(xhr);
            }
        }
    }

}());