'use strict';

/**
 * @ngdoc function
 * @name pickypickApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pickypickApp
 */
angular.module('pickypickApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
