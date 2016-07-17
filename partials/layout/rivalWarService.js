'use strict';

define([ 'projectWeb' ], function() {

	var rivalWarLayoutServiceModule = angular.module('rivalWarLayoutServiceModule', []);

	rivalWarLayoutServiceModule.factory('rivalWarLayoutService', [ '$rootScope',
			function($rootScope) {
				return {
					fire : function() {

						$.AdminLTE.layout.activate();

						$("body").addClass('sidebar-collapse');
						
						$(".sidebar-menu li a").click(function() {
							$('li .active').removeClass('active');
							$(this).parent().addClass('active');
						});

					}// fire end
				};// return end
			} ]);// .define function end
});
