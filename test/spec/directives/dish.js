'use strict';

describe('Directive: dish', function () {

  // load the directive's module
  beforeEach(module('pickypickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dish></dish>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dish directive');
  }));
});
