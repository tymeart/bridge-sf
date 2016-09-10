'use strict';

describe('Controller: RouteCtrl', function () {

  // load the controller's module
  beforeEach(module('bridgesfApp'));

  var RouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouteCtrl = $controller('RouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RouteCtrl.awesomeThings.length).toBe(3);
  });
});
