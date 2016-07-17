'use strict';

define(['projectWeb'], function () {
	
	var customersServiceModule = angular.module('customersServiceModule', []);
	
	customersServiceModule.factory('customersService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('Customer');
				
				 function jstreeDataTableReload() {
	        		  $('.bs-example-modal-sm').modal('show');
	        		  $('#jstreeTable').dataTable().api().ajax.reload();
	        	  }

					$(function () {

					var jstreeDataTable = $('#jstreeTable').dataTable( {
						"ajax": {
							"url": "/egovframework/com/etc/jstree/springiBatis/monitor/list.do",
							"dataSrc": "rows"
						},
						"processing": true,
						"responsive": true,
						"paging": true,
						"lengthChange": false,
						"searching": false,
						"ordering": true,
						"info": true,
						"autoWidth": false,
						"columns": [
							{ "data": "cell.0" },
							{ "data": "cell.1" },
							{ "data": "cell.2" },
							{ "data": "cell.3" },
							{ "data": "cell.4" },
							{ "data": "cell.5" },
							{ "data": "cell.6" },
							{ "data": "cell.7" }
						]
					} );
					});
					// ==================== jstree DataTables ====================
				
			}//fire end
		};//return end
	}]);//.define function end
});