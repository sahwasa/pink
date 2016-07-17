'use strict';

define(
		['projectWeb'],
		function() {

			var devAsideModule = angular.module('projectWeb', ['ui.router',
					'oc.lazyLoad', 'devAsideService', 'devLayoutService']);

			devAsideModule
					.controller(
							'devAsideController',
							[
									'$scope',
									'$ocLazyLoad',
									'devAsideService',
									'devLayoutService',
									function($scope, $ocLazyLoad,
											devAsideService, devLayoutService) {

										$ocLazyLoad
												.load(
														['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
												.then(function() {
													devAsideService.fire();
													devLayoutService.fire();
												});

									}]);// strutsiBatisController.controller

		});