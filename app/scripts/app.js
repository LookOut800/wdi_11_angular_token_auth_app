'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular.module('AuthApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'MainController',
  'MainDirective'
]).run(function($rootScope, $http, $window, $location, AuthFactory, PostsFactory){
  if(AuthFactory.isAuthenticated()){
    var data = JSON.parse($window.localStorage.getItem('cmt-user'));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  } else {
    $location.path('/login');
  }

  $rootScope.$on('$routeChangeStart',function(event,next){
    if(!AuthFactory.isAuthenticated()){
      $location.path('/login');
    } else {
      PostsFactory.getPosts();
    }
  });
});

