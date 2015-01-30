'use strict';

/**
 * @ngdoc overview
 * @name pickypickApp
 * @description
 * # pickypickApp
 *
 * Main module of the application.
 */
angular
  .module('pickypickApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newmenu', {
        templateUrl: 'views/menu-edit.html',
        controller: 'MenuEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
