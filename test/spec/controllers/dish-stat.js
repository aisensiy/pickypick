'use strict';

describe('Controller: DishStatCtrl', function () {

  // load the controller's module
  beforeEach(module('pickypickApp'));

  var DishStatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DishStatCtrl = $controller('DishStatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
