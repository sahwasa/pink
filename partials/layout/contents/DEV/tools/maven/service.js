'use strict';

define(['projectWeb'], function () {
	
	var mavenServiceModule = angular.module('mavenServiceModule', []);
	
	mavenServiceModule.factory('mavenService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('maven');
				window.open('http://www.313.co.kr/php/www313cokr-maven-site', 'maven', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});