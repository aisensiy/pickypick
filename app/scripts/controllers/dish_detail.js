'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:DishDetailCtrl
 * @description
 * # DishDetailCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('DishDetailCtrl', function ($scope) {

    var dishes = [
      {
        'name': '香汁排骨饭汤套餐',
        'price': 29.5,
        'restaurant': '真功夫',
        'username': '燃辉',
        'memo': ''
      },
      {
        'name': '香汁排骨饭汤套餐',
        'price': 29.5,
        'restaurant': '真功夫',
        'username': '团长',
        'memo': '不要辣'
      },
      {
        'name': '冬菇鸡腿饭汤套餐',
        'price': 27,
        'restaurant': '真功夫',
        'username': '汤川学',
        'memo': '不要香菜'
      },
      {
        'name': '鱼香茄子饭汤套餐',
        'price': 20,
        'restaurant': '真功夫',
        'username': '书记',
        'memo': '多点辣'
      },
      {
        'name': '排骨拼鸡腿肉饭汤套餐',
        'price': 30.5,
        'restaurant': '真功夫',
        'username': '尧姐',
        'memo': '不要韭菜'
      },
      {
        'name': '排骨拼鸡腿肉饭汤套餐',
        'price': 30.5,
        'restaurant': '真功夫',
        'username': '姐夫',
        'memo': '不要辣'
      },
      {
        'name': '排骨拼鸡腿肉饭汤套餐',
        'price': 30.5,
        'restaurant': '真功夫',
        'username': '缝哥',
        'memo': '不要辣'
      }
    ];
    $scope.dishes = dishes;
  });
