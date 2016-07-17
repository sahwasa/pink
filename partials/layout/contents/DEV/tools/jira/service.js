'use strict';

define(['projectWeb'], function () {
	
	var jiraServiceModule = angular.module('jiraServiceModule', []);
	
	jiraServiceModule.factory('jiraService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('jira');
				window.open('http://www.313.co.kr/jira', 'jira', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});