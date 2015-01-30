'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
