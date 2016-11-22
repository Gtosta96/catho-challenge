(function() {
    'use strict'

    angular.module('test.weatherForecast.service', [])
    .factory('WeatherForecastService', weatherForecast);

    /**
     * Service responsável manipular dados resgatados através da API OpenWeather - (22/11/16).
     * 
     * @author: Gabriel Tosta - gabrieltosta3@gmail.com
     * @version: 1.0.0
     * @param $q - Injeção Angular Defer
     * @param moment - Biblioteca externa moment
     * @param OPEN_WEATHER - Constante OPEN_WEATHER
     * @param RestService - Service responsável por disponibilizar RESTs a serem consumidos
     * @returns getWeatherForecastById, getAllWeatherForecasts - Funções que retornam objetos parseados com retorno da API OpenWeather
     */
    weatherForecast.$inject = ['$q', 'moment', 'OPEN_WEATHER', 'RestService'];
    function weatherForecast($q, moment, OPEN_WEATHER, RestService) {
        return {
            getWeatherForecastById: getWeatherForecastById,
            getAllWeatherForecasts: getAllWeatherForecasts
        }

        //Função que recupera e parseia dados da API OpenWeather por ID.
        function getWeatherForecastById(cityId) {
            //TODO: Implementar Recuperação de dados por ID.
        }

        //Função que recupera e parseia dados da API OpenWeather através de IDs disponibilizados na constante OPEN_WEATHER.CITIES_ID.
        function getAllWeatherForecasts() {
            var citiesId = OPEN_WEATHER.CITIES_ID;

            //Cria array de promises construindo parametros através dos dados disponibilizados na constante OPEN_WEATHER
            var promises = Object.keys(citiesId).reduce(function(prev, cur, index) {
                var params = { appId: OPEN_WEATHER.APP_ID, id: citiesId[cur], units: OPEN_WEATHER.UNITS, lang: OPEN_WEATHER.LANG };
                prev[index] = RestService.getWeatherForecast.get(params).$promise;

                return prev;
            }, []);

            //Requisita dados a API OpenWeather através das promises construidas.
            return $q.all(promises)
                .then(onDone)
                .catch(onFail);

            /**
             * Executa função _parseData e retorna resolução.
             * @param xhr - Resposta falha da api OpenWeather
             */
            function onDone(xhr) {
                return _parseData(xhr);
            }

            
            /**
             * Função responsável por controlar requisições falhas.
             * @param xhr - Resposta falha da API OpenWeather
             */
            function onFail(xhr) {
                console.log(xhr);
            }
        }

        
        /**
         * Função responsável por construir array de objetos apresentados na view.
         * @param dataArray - Array de dados retornados pela API OpenWeather
         * @return parsedArray - Array de objetos contruidos da forma necessária para ser apresentado na view.
         */
        function _parseData(dataArray) {
            var parsedArray = [];
            dataArray.forEach(function(data) {
               
                //Recupera data retornada pela API OpenWeather, extraindo a primeira hora disponível.
                var defaultMomentDate = moment.unix(data.list[0].dt);
                var defaultMomentDateUTC = moment.utc(defaultMomentDate);
                var defaultHour = defaultMomentDateUTC.hour();
                
                //Constroi Array de dados comparando a hora.
                var weatherForecast = data.list.reduce(function(result, cur, index) {
                    var momentDate = moment.unix(cur.dt);
                    var momentDateUTC = moment.utc(momentDate);
                    if(momentDateUTC.hour() == defaultHour) { result.push(_extractData(momentDateUTC, cur)); }

                    return result;
                }, []);
                
                //Constroi e adiciona ao Array os dados a serem exibidos na view.
                var parsedData = {
                    id: data.city.id,
                    city: data.city.name,
                    country: data.city.country,
                    weatherForecast: weatherForecast
                };
                parsedArray.push(parsedData);
            });

            return parsedArray;
        }

        /**
         * Função responsável por construir objeto com os dados informativos sobre o tempo no dia.
         * @param momentDate - Data construída através da biblioteca Moment.
         * @param data - Dados da API OpenWeather sobre o tempo no dia.
         * @return Object - Objeto com informações relevantes sobre o tempo no dia.
         */
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