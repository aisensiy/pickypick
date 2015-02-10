'use strict';

/**
 * @ngdoc directive
 * @name pickypickApp.directive:dish
 * @description
 * # dish
 */
angular.module('pickypickApp')
  .directive('dish', function () {
    return {
      templateUrl: 'views/dish.html',
      restrict: 'E',
      transclude: true,
      scope: {
        dish: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
