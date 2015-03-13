'use strict';

/**
 * @ngdoc service
 * @name pickypickApp.API
 * @description
 * # API
 * Service in the pickypickApp.
 */
var api = angular.module('API', []);
api.run(function ($http) {
  $http.defaults.headers.common['X-AVOSCloud-Application-Id'] = 's7absgjlh4excjqd1arsfcn89baq9at1i6nckwy46kdek17g'
  $http.defaults.headers.common['X-AVOSCloud-Application-Key'] = 'gs53oj7hti92uxr13mgzi47v9nv7hexjrc3982dqs4d3iq6b'
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
api.factory('MenuAPI', function($http) {
  return {
    'create': function(menu) {
      return $http.post('https://leancloud.cn/1.1/classes/Menu', menu)
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
      return $http.get('https://leancloud.cn/1.1/classes/Menu/' + menu_id);
    },
    'set_cur_menu_id': function(menu) {
      localStorage['cur_menu_id'] = menu.objectId;
    },
    'get_cur_menu_id': function() {
      return localStorage['cur_menu_id'];
    }
  }
});
api.factory('OrderAPI', ['$http', function($http) {
  return {
    create: function(order, callback) {
      var menu = order.menu;
      var dishes_in_order = [];
      angular.forEach(menu.dishes, function(dish) {
        if (dish.count > 0) {
          dishes_in_order.push(dish);
        }
      });
      order.dishes = dishes_in_order;
      order.menu = {__type: 'Pointer', className: 'Menu', objectId: menu.objectId};
      console.log(order);
      return $http.post('https://leancloud.cn/1.1/classes/Order', order);
    },
    order_list: function(menu_id, callback) {
      return $http.get('https://leancloud.cn/1.1/classes/Order?' + encodeURI('where={"menu":{"__type":"Pointer","className":"Menu","objectId":"' + menu_id + '"}}'));
    },
    update: function(order, callback) {
      return $http.put('https://leancloud.cn/1.1/classes/Order/' + order.objectId, { paid: order.paid });
    }
  }
}]);
