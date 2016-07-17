'use strict';

define(['projectWeb'], function () {
	
	var googleServiceModule = angular.module('googleServiceModule', []);
	
	googleServiceModule.factory('googleService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('google');
				window.open('http://www.google.com/intl/ko/analytics', 'google', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});