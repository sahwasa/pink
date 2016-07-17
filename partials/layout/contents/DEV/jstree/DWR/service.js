'use strict';

define(['projectWeb'], function () {
	
	var dwrServiceModule = angular.module('dwrServiceModule', []);
	
	dwrServiceModule.factory('dwrService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('dwr')
			}//fire end
		};//return end
	}]);//.define function end
});