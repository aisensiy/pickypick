'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:CreateOrderCtrl
 * @description
 * # CreateOrderCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('CreateOrderCtrl', ['$location', '$scope', 'MenuAPI', 'OrderAPI', '$routeParams', function ($location, $scope, MenuAPI, OrderAPI, $routeParams) {
    $scope.total_price = 0;
    var get_total_price = function() {
      $scope.total_price = 0;
      $scope.dishes.forEach(function(dish) {
        $scope.total_price += dish.count * dish.price;
      });
    };
    $scope.order = {};
    MenuAPI.query($routeParams.menu_id, function(menu) {
      $scope.$apply(function() {
        $scope.menu = menu;
        $scope.dishes = menu.dishes;
        $scope.dishes.forEach(function(dish) {
          dish.count = 0;
        });
      });
    });

    $scope.count_plus = function(dish) {
      dish.count += 1;
      get_total_price();
    };
    $scope.count_minus = function(dish) {
      if (dish.count <= 0) return;
      dish.count -= 1;
      get_total_price();
    };

    $scope.submit_order = function(order) {
      order.menu = $scope.menu;
      OrderAPI.create(order, function() {
        $scope.$apply(function() {
          $location.path('/order-created');
        });
      });
    };
  }]);
