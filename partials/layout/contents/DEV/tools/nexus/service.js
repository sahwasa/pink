'use strict';

define(['projectWeb'], function () {
	
	var nexusServiceModule = angular.module('nexusServiceModule', []);
	
	nexusServiceModule.factory('nexusService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('nexus');
				window.open('http://www.313.co.kr/nexus', 'nexus', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});