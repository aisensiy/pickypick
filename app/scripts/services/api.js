'use strict';

/**
 * @ngdoc service
 * @name pickypickApp.API
 * @description
 * # API
 * Service in the pickypickApp.
 */
var api = angular.module('API', []);
api.run(function () {
    AV.initialize("s7absgjlh4excjqd1arsfcn89baq9at1i6nckwy46kdek17g", "gs53oj7hti92uxr13mgzi47v9nv7hexjrc3982dqs4d3iq6b");
    console.log('initialize av api');
});
api.factory('DishAPI', function() {
  return {
    'create': function(jsondata, callback) {
      console.log('create the dish and return it');
      jsondata['id'] = 'new_dish_' + +new Date();
      callback && callback(jsondata);
    },
    'query': function(callback) {
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
      callback && callback(dishes);
    }
  }
});
api.factory('MenuAPI', function() {
  return {
    'create': function(callback) {
      console.log('create a new menu');
      callback && callback({'id': 'new_menu_' + +new Date(), 'dishes': []})
    },
    'add_dish_to_menu': function(menu, dish, callback) {
      console.log('add dish to menu');
      menu.dishes.push(dish);
      callback && callback();
    },
    'remove_dish_from_menu': function(menu, dish, callback) {
      for (var i = 0; i < menu.dishes.length; i++) {
        if (dish == menu.dishes[i]) {
          menu.dishes.splice(i, 1);
          break;
        }
      }
      console.log('remove dish in menu');
      callback && callback();
    }
  }
});
