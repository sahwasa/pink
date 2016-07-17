'use strict';

define(['projectWeb'], function () {
	
	var machineLearningModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'machineLearningService', 'devLayoutService']);
	
	machineLearningModule.controller('machineLearningController', ['$scope', '$ocLazyLoad', 'machineLearningService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, machineLearningService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  machineLearningService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});