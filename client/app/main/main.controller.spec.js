'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('robotsApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/robots')
      .respond([{'_id':'1','position':'5 1 E'}, {'_id':'2','position':'3 3 E'}]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  
  it('should attach the list of robots to the scope', function () {
    $httpBackend.flush();
    expect(scope.robotsPositions.length).toBe(2);
  });

  it('should return the position of each robot', function () {
    $httpBackend.flush();
    expect(scope.robotsPositions[0].position).toEqual('5 1 E');
  });
});
