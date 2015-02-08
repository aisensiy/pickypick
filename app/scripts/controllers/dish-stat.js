'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:DishStatCtrl
 * @description
 * # DishStatCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('DishStatCtrl', ['$scope', 'OrderAPI', '$routeParams', function ($scope, OrderAPI, $routeParams) {
    OrderAPI.order_list($routeParams.menu_id, function(dishes) {
      $scope.dish_stat = {};
      $scope.total_price = 0;
      angular.forEach(dishes, function(dish, index) {
        var name = "[" + dish.restaurant + "]" + dish.name;
        if (!$scope.dish_stat[name]) {
          $scope.dish_stat[name] = [dish];
        } else {
          $scope.dish_stat[name].push(dish);
        }
        $scope.total_price += dish.price;
      });
    });
  }]);
