'use strict';

define(['projectWeb'], function () {
	
	var whyJsTreeServiceModule = angular.module('whyJsTreeServiceModule', []);
	
	whyJsTreeServiceModule.factory('whyJsTreeService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('whyJsTree')
			}//fire end
		};//return end
	}]);//.define function end
});