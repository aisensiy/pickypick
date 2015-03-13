'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:MenuEditCtrl
 * @description
 * # MenuEditCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('MenuEditCtrl', ['$rootScope', '$scope', '$location', 'DishAPI', 'MenuAPI', function ($rootScope, $scope, $location, DishAPI, MenuAPI) {
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
      MenuAPI.add_dish_to_menu($scope.menu, dish, function() {
        $scope.selected[dish.name] = true;
        console.log($scope.menu);
      });
    };

    $scope.save_menu = function() {
      MenuAPI.create($scope.menu).success(function(data) {
        MenuAPI.set_cur_menu_id(data);
        $location.path('/create-order/' + MenuAPI.get_cur_menu_id());
        $rootScope.$broadcast('menu:create');
      });
    };
  }]);
