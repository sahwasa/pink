'use strict';
define(['projectWeb'
], function() {
  var frontendDevelopers = angular.module('projectWeb', []);
  frontendDevelopers
  .directive('frontendDev',function(){
    return{
      templateUrl : "partials/layout/contents/DEV/stakeholder/frontendDevelopers/tmpl/frontendDevTmpl.html",
      restrict : "AE",
      scope : {
        photo :"@photos",
        name : "@names",
        job : "@jobs",
        mail : "@mails"
      }
    };
  });
});
