'use strict';

define([ 'projectWeb' ], function() {

	var devLayoutServiceModule = angular.module('devLayoutServiceModule', []);

	devLayoutServiceModule.factory('devLayoutService', [ '$rootScope',
			function($rootScope) {
				return {
					fire : function() {

						$.AdminLTE.layout.activate();

						$(".sidebar-menu li a").click(function() {
							$('li .active').removeClass('active');
							$(this).parent().addClass('active');
						});

					}// fire end
				};// return end
			} ]);// .define function end
});
