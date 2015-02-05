'use strict';

describe('Controller: DishDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('pickypickApp'));

  var DishDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DishDetailCtrl = $controller('DishDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
