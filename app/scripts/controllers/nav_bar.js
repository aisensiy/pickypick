'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:NavBarCtrl
 * @description
 * # NavBarCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('NavBarCtrl', ['$rootScope', '$scope', 'MenuAPI', function ($rootScope, $scope, MenuAPI) {
    $scope.menu_id = MenuAPI.get_cur_menu_id();
    $scope.$on('menu:create', function() {
      $scope.menu_id = MenuAPI.get_cur_menu_id();
    });
  }]);
