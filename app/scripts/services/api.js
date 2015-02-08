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
    'create': function(dish, callback) {
      var new_dish = AV.Object.new('Dish');
      console.log('create the dish and return it');
      new_dish.save(dish, {
        success: function(dish_object) {
          callback && callback(JSON.parse(JSON.stringify(dish_object)));
        }
      });
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
    'create': function(menu, callback) {
      var new_menu = AV.Object.new('Menu');
      console.log('create the menu and return it');
      new_menu.set('dishes', JSON.stringify(menu.dishes));
      new_menu.save(null, {
        success: function(menu_object) {
          callback && callback(JSON.parse(JSON.stringify(menu_object)));
        }
      });
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
    },
    'query': function(menu_id, callback) {
      console.log('fetch menu with id');
      var menu = {
        id: 'menu_' + +new Date(),
        dishes: [
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
        ]
      };
      callback && callback(menu);
    }
  }
});
api.factory('OrderAPI', function() {
  return {
    create: function(order, callback) {
      console.log('create order');
      console.log(order);
      order.id = 'order_' + +new Date();
      callback && callback(order);
    },
    order_list: function(menu_id, callback) {
      console.log('fetch order list from ' + menu_id);
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
      callback && callback(dishes);
    },
    update: function(order) {
      console.log('update order');
    }
  }
});
