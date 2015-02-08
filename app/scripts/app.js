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
    'ngTouch',
    'API'
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
      .when('/reservation/:menu_id', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl'
      })
      .when('/dish-stat/:menu_id', {
        templateUrl: 'views/dish-stat.html',
        controller: 'DishStatCtrl'
      })
      .when('/dish-detail/:menu_id', {
        templateUrl: 'views/dish-detail.html',
        controller: 'DishDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
