'use strict';

define(['projectWeb'], function () {
	
	var hudsonModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'hudsonService', 'devLayoutService']);
	
	hudsonModule.controller('hudsonController', ['$scope', '$ocLazyLoad', 'hudsonService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, hudsonService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  hudsonService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});