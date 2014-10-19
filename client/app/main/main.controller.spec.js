'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('robotsApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/robots')
      .respond([]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  
  it('should attach the list of robots to the scope', function () {
    $httpBackend.flush();
    expect(scope.robots.length).toBe(2);
  });
});
