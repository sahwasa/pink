'use strict';

require.config({
  baseUrl: '../../',

  paths: {
    //jquery
    'jquery': 'lib/jquery/dist/jquery.min',
    'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
    'jquery-migrate': 'lib/jquery-migrate/jquery-migrate.min',

    //twitterBootstrap
    'twitterBootstrap': 'lib/bootstrap/dist/js/bootstrap.min',

    //angular
    'angular': 'lib/angular/angular.min',
    'angular.animate' : 'lib/angular-animate/angular-animate.min',
    'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
    'ngRoute': 'lib/angular-route/angular-route.min',
    'oc.lazyLoad': 'lib/oclazyload/dist/ocLazyLoad.require',
    'text': 'lib/requirejs-text/text',
    'css': 'lib/require-css/css.min',

    //myApp
    'projectWeb' : 'partials/beeer/app'
  },

  shim: {
    'jquery-migrate': ['jquery'],
    'jquery-ui': ['jquery-migrate'],
    'twitterBootstrap': ['jquery-ui'],
    'angular': ['twitterBootstrap'],
    'angular.animate': ['angular'],
    'ngRoute': ['angular.animate'],
    'ui.router': ['ngRoute'],
    'oc.lazyLoad': ['ui.router'],
    'text': ['oc.lazyLoad'],
    'css': ['text'],
    'projectWeb' : ['css']
  }
});

require(	[
    'projectWeb'
  ],
  function (projectWeb) {
    $(document).ready(function () {

      angular.bootstrap(document, ['projectWeb']);
      layoutScroll();

    });
  }//$(document).ready
);//require

function layoutScroll() {
  var arrSecTOP = [];
  var idx = 0;

  $(window).on({
    load:function(){
      arrSecTOP = [];
      $('article > section').each(function () {
        arrSecTOP.push($(this).offset().top)
      });
    },
    resize:function () {
      $(this).load();
    }
  });
  $('article > section').each(function () {
    arrSecTOP.push($(this).offset().top)
  });
  $('.snb li').on('click',function(){
    var $this = $(this);
    $this.addClass('on').siblings().removeClass('on')
      .find('ul').slideUp("slow").children().removeClass('on');
    if($this.is('.home')){
      $('article').stop().animate({scrollTop:idx});
    }
    if($this.children().is('ul')){$this.find('ul').slideDown("slow")}
    if($this.parent().is('.snb-sub')){
      idx = $this.index();
      $('article').stop().animate({scrollTop:arrSecTOP[idx+1]-20});
    }
    if($this.is('.end-list')){
      $('article').stop().animate({scrollTop:arrSecTOP[arrSecTOP.length-1]});
    }
  });
}

