'use strict';


/**
 * @ngdoc function
 * @name pickypickApp.controller:DishDetailCtrl
 * @description
 * # DishDetailCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('DishDetailCtrl', ['$scope', 'OrderAPI', '$routeParams', function ($scope, OrderAPI, $routeParams) {
    $scope.total_price = 0;
    OrderAPI.order_list($routeParams.menu_id, function(orders) {
      $scope.$apply(function() {
        $scope.orders = orders;
        angular.forEach($scope.orders, function(order) {
          angular.forEach(order.dishes, function(dish) {
            $scope.total_price += dish.price;
          });
        });
      });
    });
    $scope.update_order_pay_info = function(order) {
      OrderAPI.update(order);
    };
  }]);
