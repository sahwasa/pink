'use strict';

define(['projectWeb'
], function() {

	var frontendDevelopersServiceModule = angular.module(
			'frontendDevelopersServiceModule', []);

	frontendDevelopersServiceModule.factory('frontendDevelopersService', [
			'$rootScope', function($rootScope) {
				return {
					fire : function() {
						console.log('frontendDevelopers');
					},// fire end
					jcarousel : function() {
						$('.jcarousel-skin-tango').jcarousel();
					},// jcarousel end
					uSquare : function() {
						$(".usquare_module_wrapper").uSquare({
							opening_speed : 300,
							closing_speed : 500,
							easing : 'swing'
						});
					},// usquare end
					customScroll : function() {
						$(".usquare_about").mCustomScrollbar();
					}// customScroll
				};// return end
			}
	]);// .define function end
});
