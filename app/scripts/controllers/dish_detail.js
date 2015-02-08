'use strict';


/**
 * @ngdoc function
 * @name pickypickApp.controller:DishDetailCtrl
 * @description
 * # DishDetailCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('DishDetailCtrl', ['$scope', 'OrderAPI', function ($scope, OrderAPI) {
    OrderAPI.order_list('123', function(dishes) {
      $scope.dishes = dishes;
    });
    $scope.update_order_pay_info = function(dish) {
      OrderAPI.update(dish);
    };
  }]);
