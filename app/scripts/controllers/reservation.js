'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('ReservationCtrl', ['$scope', 'MenuAPI', 'OrderAPI', '$routeParams', function ($scope, MenuAPI, OrderAPI, $routeParams) {
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
    };
    $scope.count_minus = function(dish) {
      if (dish.count <= 0) return;
      dish.count -= 1;
    };

    $scope.submit_order = function(order) {
      order.menu = $scope.menu;
      OrderAPI.create(order);
    };
  }]);
