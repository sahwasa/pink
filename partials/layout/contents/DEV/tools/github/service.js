'use strict';

define(['projectWeb'], function () {
	
	var githubServiceModule = angular.module('githubServiceModule', []);
	
	githubServiceModule.factory('githubService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('github');
				window.open('https://github.com/jstree', 'github', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});