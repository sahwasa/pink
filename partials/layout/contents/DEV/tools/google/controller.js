'use strict';

define(['projectWeb'], function () {
	
	var googleModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'googleService', 'devLayoutService']);
	
	googleModule.controller('googleController', ['$scope', '$ocLazyLoad', 'googleService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, googleService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  googleService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});