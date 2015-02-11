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
    OrderAPI.order_list($routeParams.menu_id, function(orders) {
      $scope.$apply(function() {
        $scope.dish_stat = {};
        $scope.total_price = 0;
        angular.forEach(orders, function(order) {
          angular.forEach(order.dishes, function(dish) {
            var name = "[" + dish.restaurant + "]" + dish.name;
            if (!$scope.dish_stat[name]) {
              $scope.dish_stat[name] = {
                dishes: [dish],
                memos: {}
              };
            } else {
              $scope.dish_stat[name].dishes.push(dish);
            }
            if ($scope.dish_stat[name].memos[order.memo]) {
              $scope.dish_stat[name].memos[order.memo] += 1;
            } else if (order.memo) {
              $scope.dish_stat[name].memos[order.memo] = 1;
            }
            $scope.total_price += dish.price;
          });
        });
      });
    });
  }]);
