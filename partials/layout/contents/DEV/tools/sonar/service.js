'use strict';

define(['projectWeb'], function () {
	
	var sonarServiceModule = angular.module('sonarServiceModule', []);
	
	sonarServiceModule.factory('sonarService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('sonar');
				window.open('http://www.313.co.kr/sonar', 'sonar', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});