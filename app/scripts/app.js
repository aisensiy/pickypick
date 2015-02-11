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
      .when('/create-order/:menu_id', {
        templateUrl: 'views/create-order.html',
        controller: 'CreateOrderCtrl'
      })
      .when('/dish-stat/:menu_id', {
        templateUrl: 'views/dish-stat.html',
        controller: 'DishStatCtrl'
      })
      .when('/dish-detail/:menu_id', {
        templateUrl: 'views/dish-detail.html',
        controller: 'DishDetailCtrl'
      })
      .when('/order-created', {
        templateUrl: 'views/order-created-message.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
