'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:MenuEditCtrl
 * @description
 * # MenuEditCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('MenuEditCtrl', ['$scope', 'DishAPI', 'MenuAPI', function ($scope, DishAPI, MenuAPI) {
    DishAPI.query(function(dishes) {
      $scope.dishes = dishes;
    });
    MenuAPI.create(function(menu) {
      $scope.menu = menu;
    })
    $scope.new_dish = {};
    $scope.selected = {};

    $scope.add_new_dish = function() {
      MenuAPI.add_dish_to_menu($scope.menu, $scope.new_dish, function() {
        $scope.new_dish = {};
      });
    };

    $scope.remove_dish = function(dish) {
      MenuAPI.remove_dish_from_menu($scope.menu, dish, function() {
        delete $scope.selected[dish.name];
      });
    };

    $scope.copy_to_menu = function(dish) {
      if ($scope.selected[dish.name]) {
        return;
      }
      MenuAPI.add_dish_to_menu($scope.menu, Object.create(dish), function() {
        $scope.selected[dish.name] = true;
      });
    };
  }]);
