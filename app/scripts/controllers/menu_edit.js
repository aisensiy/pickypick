'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:MenuEditCtrl
 * @description
 * # MenuEditCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('MenuEditCtrl', ['$scope', '$location', 'DishAPI', 'MenuAPI', function ($scope, $location, DishAPI, MenuAPI) {
    DishAPI.query(function(dishes) {
      $scope.dishes = dishes;
    });
    $scope.new_dish = {};
    $scope.selected = {};
    $scope.menu = {
      dishes: []
    };

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

    $scope.save_menu = function() {
      MenuAPI.create($scope.menu, function(new_menu) {
        $scope.$apply(function() {
          console.log('wait to jump');
          $location.path('/reservation/' + new_menu.objectId);
        });
      });
    };
  }]);
