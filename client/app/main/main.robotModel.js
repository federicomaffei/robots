'use strict';

angular.module('robotsApp')
.service('Robot', function(){

	this.cardinals = { 1: 'N', 2: 'E', 3: 'S', 4: 'W' };
	this.orientations = {'N': 1, 'E': 2, 'S': 3, 'W': 4 };


	this.getCardinal = function(orientation) {
		return this.cardinals[orientation];
	};

	this.getOrientation = function(cardinal) {
		return this.orientations[cardinal];
	};

	this.getPosition = function(xCoordinate, yCoordinate, cardinal) {
		return xCoordinate + ' ' + yCoordinate + ' ' + cardinal;
	};

	this.executeActions = function(actionList, startPosition) {
		var endPosition = startPosition;
		for(var index = 0; index < actionList.length; index++) {
			var xCoordinate = parseInt(endPosition[0]);
			var yCoordinate = parseInt(endPosition[2]);
			var cardinal = endPosition[4];
			if(actionList[index] === 'M'){
				endPosition = this.move(xCoordinate, yCoordinate, cardinal);
			}
			else {
				cardinal = this.rotate(actionList[index], cardinal);
				endPosition = this.getPosition(xCoordinate, yCoordinate, cardinal);
			}
		}
		return endPosition;
	};

	this.rotate = function(direction, cardinal) {
		var orientation = this.getOrientation(cardinal);
		if(direction === 'R'){
			if(orientation === 4){
				return this.getCardinal(1);
			}
			else {
				return this.getCardinal(orientation += 1);
			}
		}
		if(direction === 'L'){
			if(orientation === 1){
				return this.getCardinal(4);
			}
			else {
				return this.getCardinal(orientation -= 1);
			}
		}
	};

	this.move = function(xCoordinate, yCoordinate, cardinal) {
		var orientation = this.getOrientation(cardinal);
		switch(orientation) {
			case 1:
			yCoordinate += 1;
			break;
			case 2:
			xCoordinate += 1;
			break;
			case 3:
			yCoordinate -= 1;
			break;
			case 4:
			xCoordinate -= 1;
			break;
		}
		return this.getPosition(xCoordinate, yCoordinate, cardinal);
	};
});