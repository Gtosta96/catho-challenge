(function() {
    'use strict'

    angular.module('test.weatherForecast.service', [])
    .factory('WeatherForecastService', weatherForecast);

    weatherForecast.$inject = ['$q', 'moment', 'OPEN_WEATHER', 'RestService'];
    function weatherForecast($q, moment, OPEN_WEATHER, RestService) {
        return {
            getWeatherForecastById: getWeatherForecastById,
            getAllWeatherForecasts: getAllWeatherForecasts
        }

        function getWeatherForecastById(cityId) {
            //TODO
        }

        function getAllWeatherForecasts() {

            var citiesId = OPEN_WEATHER.CITIES_ID;
            var promises = Object.keys(citiesId).reduce(function(prev, cur, index) {
                var params = { appId: OPEN_WEATHER.APP_ID, id: citiesId[cur], units: OPEN_WEATHER.UNITS, lang: OPEN_WEATHER.LANG };
                prev[index] = RestService.getWeatherForecast.get(params).$promise;

                return prev;
            }, []);

            return $q.all(promises)
                .then(onDone)
                .catch(onFail);

            function onDone(xhr) {
                return _parseData(xhr);
            }

            function onFail(xhr) {
                console.log(xhr);
            }
        }

        function _parseData(dataArray) {
            
            var parsedArray = [];
            dataArray.forEach(function(data) {
               
                var defaultMomentDate = moment.unix(data.list[0].dt);
                var defaultMomentDateUTC = moment.utc(defaultMomentDate);
                var defaultHour = defaultMomentDateUTC.hour();
                
                var weatherForecast = data.list.reduce(function(result, cur, index) {
                    var momentDate = moment.unix(cur.dt);
                    var momentDateUTC = moment.utc(momentDate);
                    if(momentDateUTC.hour() == defaultHour) { result.push(_extractData(momentDateUTC, cur)); }

                    return result;
                }, []);
                
                var parsedData = { id: data.city.id, city: data.city.name, country: data.city.country, weatherForecast: weatherForecast };
                parsedArray.push(parsedData);
            });

            return parsedArray;
        }

        function _extractData(momentDate, data) {
            return {
                momentDate: momentDate,
                quantitative: {
                        temperature: data.main.temp,
                        maxTemp: data.main.temp_max,
                        minTemp: data.main.temp_min,
                        humidity: data.main.humidity,
                        wind: {
                            deg: data.wind.deg,
                            speed: data.wind.speed
                        }
                },
                weather: {
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                }
            }
        }
    }

}());