'use strict';

define(['projectWeb'], function () {
	
	var hadoopServiceModule = angular.module('hadoopServiceModule', []);
	
	hadoopServiceModule.factory('hadoopService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('check')
			}//fire end
		};//return end
	}]);//.define function end
});