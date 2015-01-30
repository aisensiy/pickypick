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
  });
