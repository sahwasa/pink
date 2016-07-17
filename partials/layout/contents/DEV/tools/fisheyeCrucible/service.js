'use strict';

define(['projectWeb'], function () {
	
	var fisheyeCrucibleServiceModule = angular.module('fisheyeCrucibleServiceModule', []);
	
	fisheyeCrucibleServiceModule.factory('fisheyeCrucibleService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('fisheyeCrucible');
				window.open('http://www.313.co.kr/fecru', 'fisheyeCrucible', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});