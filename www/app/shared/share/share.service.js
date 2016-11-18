(function() {
	'use strict'

	angular.module('test.share.service', [])
	.factory('ShareService', shareService);

	function shareService() {
        var keeper = {};
		return {
            get: get,
			set: set
		}

        function get(key) {
        return keeper[key];
        }

        function set(key, obj) {
            keeper[key] = obj;
        }
    }

}());