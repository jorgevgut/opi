'use strict';

describe('Controller: ActividadesCtrl', function () {

  // load the controller's module
  beforeEach(module('opiAppApp'));

  var ActividadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActividadesCtrl = $controller('ActividadesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
