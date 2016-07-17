'use strict';

define(['projectWeb'], function () {
	
	var routeModule = angular.module('projectWeb', ['ngRoute', 'ui.router', 'oc.lazyLoad']);

	routeModule.config(['$routeProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($routeProvider, $stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
			
			$urlRouterProvider.otherwise("/");
			$locationProvider.hashPrefix("StandardDevelopment#");

			// You can also load via resolve
		    $stateProvider
		      .state('rivalWar', {
		        url: "/", // root route
		        views: {
		          '': {
		            controller: 'rivalWarLayoutController', // This view will use AppCtrl loaded below in the resolve
		            templateUrl: 'partials/layout/rivalWarIndex.html'
		          }
		        },
		        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
		          rivalWarIndexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
		            // you can lazy load files for an existing module
		            return $ocLazyLoad.load([{
		                name: 'rivalWarLayoutService',
		                files: ['partials/layout/rivalWarService.js']
		            },{
		                name: 'rivalWarLayoutController',
		                files: ['partials/layout/rivalWarController.js']
		            }]);
		          }]
		        }
		      })
		      .state('dev', {
		        url: "/dev", // root route
		        views: {
		          '': {
		            controller: 'devLayoutController', // This view will use AppCtrl loaded below in the resolve
		            templateUrl: 'partials/layout/devIndex.html'
		          }
		        },
		        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
		          devIndexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
		            // you can lazy load files for an existing module
		            return $ocLazyLoad.load([{
		                name: 'devLayoutService',
		                files: ['partials/layout/devService.js']
		            },{
		                name: 'devLayoutController',
		                files: ['partials/layout/devController.js']
		            }]);
		          }]
		        }
		      });
	}]); //indexModule.config
});

