'use strict';

define(['projectWeb'], function () {
	
	var bambooServiceModule = angular.module('bambooServiceModule', []);
	
	bambooServiceModule.factory('bambooService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('bamboo');
				window.open('http://www.313.co.kr/bamboo', 'bamboo', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});