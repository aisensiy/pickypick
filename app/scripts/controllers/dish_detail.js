'use strict';


/**
 * @ngdoc function
 * @name pickypickApp.controller:DishDetailCtrl
 * @description
 * # DishDetailCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('DishDetailCtrl', ['$scope', 'OrderAPI', '$routeParams' function ($scope, OrderAPI, $routeParams) {
    OrderAPI.order_list($routeParams.menu_id, function(dishes) {
      $scope.dishes = dishes;
    });
    $scope.update_order_pay_info = function(dish) {
      OrderAPI.update(dish);
    };
  }]);
