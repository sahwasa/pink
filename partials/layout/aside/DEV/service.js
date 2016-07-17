'use strict';

define(['projectWeb'], function () {
	
	var devAsideServiceModule = angular.module('devAsideServiceModule', []);
	
	devAsideServiceModule.factory('devAsideService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('devAsideServiceModule');
			}//fire end
		};//return end
	}]);//.define function end
});