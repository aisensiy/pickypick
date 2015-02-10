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
    window.Menu = AV.Object.extend('Menu');
    window.Order = AV.Object.extend('Order');
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
      var query = new AV.Query(Menu);
      query.get(menu_id, {
        success: function(menu_object) {
          var plain_menu = JSON.parse(JSON.stringify(menu_object));
          plain_menu.dishes = JSON.parse(plain_menu.dishes);
          callback && callback(plain_menu);
        }
      });
    },
    'set_cur_menu_id': function(menu) {
      localStorage['cur_menu_id'] = menu.objectId;
    },
    'get_cur_menu_id': function() {
      return localStorage['cur_menu_id'];
    }
  }
});
api.factory('OrderAPI', function() {
  return {
    create: function(order, callback) {
      console.log('create order');

      var parent_menu = new Menu();
      parent_menu.id = order.menu.objectId;

      var new_order = new Order();
      var dishes_in_order = [];
      angular.forEach(order.menu.dishes, function(dish) {
        if (dish.count > 0) {
          dishes_in_order.push(dish);
        }
      });
      new_order.set('menu', parent_menu);
      new_order.set('dishes', JSON.stringify(dishes_in_order));
      new_order.set('name', order.name);
      new_order.set('memo', order.memo);
      new_order.save(null, {
        success: function(order_object) {
          callback && callback(order_object);
        }
      });
    },
    order_list: function(menu_id, callback) {
      console.log('fetch order list from ' + menu_id);
      var parent_menu = new Menu();
      parent_menu.id = menu_id;

      var query = new AV.Query(Order);
      query.equalTo('menu', parent_menu);
      query.find({
        success: function(orders) {
          var plain_orders = [];
          angular.forEach(orders, function(order) {
            var plain_order = JSON.parse(JSON.stringify(order));
            plain_order.dishes = JSON.parse(plain_order.dishes);
            plain_orders.push(plain_order);
          });
          callback && callback(plain_orders);
        }
      })
    },
    update: function(order, callback) {
      console.log('update order');
      var order_object = new Order();
      order_object.id = order.objectId;
      order_object.set('paid', order.paid);
      order_object.save(null, {
        success: function(order_obj) {
          callback && callback(order_obj);
        }
      });
    }
  }
});
