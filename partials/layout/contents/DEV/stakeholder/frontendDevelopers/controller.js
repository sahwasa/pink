'use strict';

define(
		['projectWeb'
		],
		function() {

			var frontendDevelopersModule = angular.module('projectWeb', [
					'ui.router', 'oc.lazyLoad', 'frontendDevelopersService',
					'devLayoutService'
			]);

			frontendDevelopersModule
					.controller(
							'frontendDevelopersController',
							[
									'$scope',
									'$ocLazyLoad',
									'frontendDevelopersService',
									'devLayoutService',
									function($scope, $ocLazyLoad,
											frontendDevelopersService,
											devLayoutService) {

										$ocLazyLoad
												.load(
														[
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.mCustomScrollbar.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.mousewheel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jcarousel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.usquare.js'
														])
												.then(
														function() {

															frontendDevelopersService
																	.fire();
															devLayoutService
																	.fire();
															frontendDevelopersService
																	.jcarousel();
															frontendDevelopersService
																	.uSquare();
															frontendDevelopersService
																	.customScroll();
														});
                      var frontDevList=[
                        {
                          photo:"LDM.jpeg",
                          name:"이동민",
                          job:"Java Developer / Architecture",
                          mail:"mailto:313@313.co.kr"
                        },
                        {
                          photo:"LCY.jpg",
                          name:"이창용",
                          job:"Web Programmer",
                          mail:"mailto:313@313.co.kr"
                        }
                      ];
                      $scope.frontDevList=frontDevList;
									}
							]);// frontendDevelopersController.controller


		});
