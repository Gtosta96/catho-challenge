(function(){
	'use strict'

	angular.module('test.run', ['datatables'])
	.run(run);

	function run(DTDefaultOptions) {
		DTDefaultOptions.setOption('paging', false);
		DTDefaultOptions.setOption('bInfo', false);
		//DTDefaultOptions.setOption('searching', false);
	};

}());
