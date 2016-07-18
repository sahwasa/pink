'use strict';

define(['projectWeb'], function () {

	var frontendDevelopersModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'frontendDevelopersService', 'devLayoutService']);

	frontendDevelopersModule.controller('frontendDevelopersController', ['$scope', '$ocLazyLoad', 'frontendDevelopersService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, frontendDevelopersService, devLayoutService) {

		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.mCustomScrollbar.min.js',
                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.mousewheel.min.js',
                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jcarousel.min.js',
                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.usquare.js',
                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/custom.js',

		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  frontendDevelopersService.fire();
        	  devLayoutService.fire();
	    });


	}]);//frontendDevelopersController.controller

});
