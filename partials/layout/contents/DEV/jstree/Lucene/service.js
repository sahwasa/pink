'use strict';

define(['projectWeb'], function () {
	
	var luceneServiceModule = angular.module('luceneServiceModule', []);
	
	luceneServiceModule.factory('luceneService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('check')
			}//fire end
		};//return end
	}]);//.define function end
});