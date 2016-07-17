'use strict';

define(['projectWeb'], function () {
	
	var confluenceServiceModule = angular.module('confluenceServiceModule', []);
	
	confluenceServiceModule.factory('confluenceService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('confluence');
				window.open('http://www.313.co.kr/confluence', 'confluence', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});