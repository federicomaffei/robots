'use strict';

angular.module('robotsApp')
  .controller('MainCtrl', function ($scope, $http, socket, Robot) {
    $scope.robots = ['1 1 N', '2 2 S'];

    $http.get('/api/robots').success(function(robotsPositions) {
      $scope.robotsPositions = robotsPositions;
      socket.syncUpdates('robot', $scope.robotsPositions);
    });

    $scope.addRobot = function() {
      Robot.xCoordinate = $scope.firstX;
      Robot.yCoordinate = $scope.firstY;
      Robot.orientation = $scope.firstOrientation;
      $http.post('/api/robots', {position: Robot.getPosition()});
      console.log(Robot);
    };

    $scope.updateRobot = function() {

    };

    $scope.deleteRobot = function(robot) {
      $http.delete('/api/robot/' + robot._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('robot');
    });
  });
