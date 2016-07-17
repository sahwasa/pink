'use strict';

define(['projectWeb'], function () {
	
	var frontendDevelopersServiceModule = angular.module('frontendDevelopersServiceModule', []);
	
	frontendDevelopersServiceModule.factory('frontendDevelopersService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('frontendDevelopers');
			}//fire end
		};//return end
	}]);//.define function end
});