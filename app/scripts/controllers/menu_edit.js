'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:MenuEditCtrl
 * @description
 * # MenuEditCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('MenuEditCtrl', function ($scope) {
    var dishes = [
      {
        'name': '香汁排骨饭汤套餐',
        'price': 29.5,
        'restaurant': '真功夫'
      },
      {
        'name': '冬菇鸡腿饭汤套餐',
        'price': 27,
        'restaurant': '真功夫'
      },
      {
        'name': '鱼香茄子饭汤套餐',
        'price': 20,
        'restaurant': '真功夫'
      },
      {
        'name': '排骨拼鸡腿肉饭汤套餐',
        'price': 30.5,
        'restaurant': '真功夫'
      }
    ];
    $scope.dishes = dishes;
    $scope.menu = [];
    $scope.new_dish = {};

    $scope.selected = {};

    $scope.add_new_dish = function() {
      $scope.menu.push($scope.new_dish);
      $scope.new_dish = {};
    };

    $scope.remove_dish = function(dish) {
      for (var i = 0; i < $scope.menu.length; i++) {
        if (dish == $scope.menu[i]) {
          $scope.menu.splice(i, 1);
          delete $scope.selected[dish.name];
          break;
        }
      }
    };

    $scope.copy_to_menu = function(dish) {
      if ($scope.selected[dish.name]) {
        return;
      }
      $scope.menu.push(Object.create(dish));
      $scope.selected[dish.name] = true;
    };
  });
