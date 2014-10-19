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
    };

    $scope.updateRobot = function(id, actionList) {
      $http.get('/api/robots/' + id).success(function(robot) {
        Robot.xCoordinate = parseInt(robot['position'][0]);
        Robot.yCoordinate = parseInt(robot['position'][2]);
        Robot.cardinal = robot['position'][4];
        Robot.orientation = Robot.getOrientation();
        for(var index = 0; index < actionList.length; index++) {
          if(actionList[index] === 'M'){
            Robot.move();
          }
          else {
            Robot.rotate(actionList[index]);
          }
          $http.put('/api/robots/' + id, {position: Robot.getPosition()});
        };
      });
    };

    $scope.deleteRobot = function(robot) {
      $http.delete('/api/robot/' + robot._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('robot');
    });
  });
