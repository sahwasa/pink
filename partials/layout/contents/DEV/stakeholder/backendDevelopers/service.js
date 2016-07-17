'use strict';

define(['projectWeb'], function () {
	
	var backendDevelopersServiceModule = angular.module('backendDevelopersServiceModule', []);
	
	backendDevelopersServiceModule.factory('backendDevelopersService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('backendDevelopers');
			}//fire end
		};//return end
	}]);//.define function end
});