'use strict';

define(['projectWeb'], function () {
	
	var machineLearningServiceModule = angular.module('machineLearningServiceModule', []);
	
	machineLearningServiceModule.factory('machineLearningService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('check')
			}//fire end
		};//return end
	}]);//.define function end
});