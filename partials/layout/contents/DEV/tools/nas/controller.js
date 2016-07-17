'use strict';

define(['projectWeb'], function () {
	
	var nasModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'nasService', 'devLayoutService']);
	
	nasModule.controller('nasController', ['$scope', '$ocLazyLoad', 'nasService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, nasService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  nasService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});