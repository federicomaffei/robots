'use strict';

angular.module('robotsApp')
.controller('MainCtrl', function ($scope, $http, socket, Robot) {

  $scope.arenaX = 5;
  $scope.arenaY = 5;

  $http.get('/api/robots').success(function(robotsPositions) {
    $scope.robotsPositions = robotsPositions;
    socket.syncUpdates('robot', $scope.robotsPositions);
  });

  $scope.addRobot = function() {
    var xCoordinate = $scope.firstX;
    var yCoordinate = $scope.firstY;
    var orientation = $scope.firstOrientation;
    $http.post('/api/robots', {position: Robot.getPosition(xCoordinate, yCoordinate, Robot.getCardinal(orientation))});
  };

  $scope.updateRobot = function(id, actionList) {
    console.log($scope.arenaX);
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
