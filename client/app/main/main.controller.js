'use strict';

angular.module('robotsApp')
.controller('MainCtrl', function ($scope, $http, socket, Robot) {
  $scope.robots = ['1 1 N', '2 2 S'];

  $http.get('/api/robots').success(function(allRobots) {
    $scope.robots = allRobots;
    socket.syncUpdates('robot', $scope.allRobots);
  });

  $scope.addRobot = function() {
    var xCoordinate = $scope.firstX;
    var yCoordinate = $scope.firstY;
    var orientation = $scope.firstOrientation;
    $http.post('/api/robots', {position: Robot.getPosition(xCoordinate, yCoordinate, Robot.getCardinal(orientation))});
  };

  $scope.updateRobot = function(id, actionList) {
    $http.get('/api/robots/' + id).success(function(robot) {
      var startPosition = robot.position;
      var endPosition = Robot.executeActions(actionList, startPosition);
      $http.put('/api/robots/' + id, {position: endPosition});
    });
  };

  $scope.deleteRobot = function(robot) {
    $http.delete('/api/robot/' + robot._id);
  };

  $scope.$on('$destroy', function () {
    socket.unsyncUpdates('robot');
  });
});
