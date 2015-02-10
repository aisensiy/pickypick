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
    $scope.total_paid = 0;
    var update_total_paid = function() {
      $scope.total_paid = 0;
      angular.forEach($scope.orders, function(order) {
        if (order.paid) {
          $scope.total_paid += order.total_price;
        }
      });
    };
    OrderAPI.order_list($routeParams.menu_id, function(orders) {
      $scope.$apply(function() {
        $scope.orders = orders;
        angular.forEach($scope.orders, function(order) {
          order.total_price = 0;
          angular.forEach(order.dishes, function(dish) {
            $scope.total_price += dish.price;
            order.total_price += dish.price;
          });
        });
        update_total_paid();
      });
    });
    $scope.update_order_pay_info = function(order) {
      OrderAPI.update(order, function() {
        $scope.$apply(function() {
          update_total_paid();
        });
      });
    };
  }]);
