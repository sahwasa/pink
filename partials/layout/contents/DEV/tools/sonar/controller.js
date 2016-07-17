'use strict';

define(['projectWeb'], function () {
	
	var sonarModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'sonarService', 'devLayoutService']);
	
	sonarModule.controller('sonarController', ['$scope', '$ocLazyLoad', 'sonarService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, sonarService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  sonarService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});