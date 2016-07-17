'use strict';

define(['projectWeb'], function () {
	
	var nasServiceModule = angular.module('nasServiceModule', []);
	
	nasServiceModule.factory('nasService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('nas');
				window.open('http://www.313.co.kr/nas', 'nas', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});