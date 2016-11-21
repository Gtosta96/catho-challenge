(function() {
    'use strict'

    angular.module('test.setBackground.directive', [])
    .directive('ttSetBackground', ttSetBackground);

    function ttSetBackground() {
        return {
            restrict: 'E',
            scope: {
                source: '=',
                classes: '='
            },
            link: function(scope, element, attributes) {
                scope.classes.forEach(function(clazz) {

                    var url = 'images/' + scope.source;

                    var el = element[0].getElementsByClassName(clazz).length ? element[0].getElementsByClassName(clazz) : document.getElementsByClassName(clazz);
                    var aElement = angular.element(el);

                    aElement.is('img') ? aElement.attr({ 'src': url }) : aElement.css({ 'background-image': 'url(' + url +')' });     
                });
                
            }
        }
    }
}());