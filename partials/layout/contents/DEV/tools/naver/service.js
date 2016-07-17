'use strict';

define(['projectWeb'], function () {
	
	var naverServiceModule = angular.module('naverServiceModule', []);
	
	naverServiceModule.factory('naverService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('naver');
				window.open('http://analytics.naver.com', 'naver', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});