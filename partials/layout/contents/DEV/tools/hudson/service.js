'use strict';

define(['projectWeb'], function () {
	
	var hudsonServiceModule = angular.module('hudsonServiceModule', []);
	
	hudsonServiceModule.factory('hudsonService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('hudson');
				window.open('http://www.313.co.kr/hudson', 'hudson', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});