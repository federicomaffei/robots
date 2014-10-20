'use strict';

angular.module('robotsApp')
.service('Robot', function(){

	this.upperX = 5; //default
	this.upperY = 5; //default
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

	this.setBoundaries = function(x, y) {
		this.upperX = x;
		this.upperY = y;
	};

	this.executeActions = function(actionList, startPosition) {
		var endPosition = startPosition;
		for (var index = 0; index < actionList.length; index++) {
			var xCoordinate = parseInt(endPosition[0]);
			var yCoordinate = parseInt(endPosition[2]);
			var cardinal = endPosition[4];
			if (actionList[index] === 'M'){
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
		if (direction === 'R'){
			if (orientation === 4){
				return this.getCardinal(1);
			}
			else {
				return this.getCardinal(orientation += 1);
			}
		}
		if (direction === 'L'){
			if (orientation === 1){
				return this.getCardinal(4);
			}
			else {
				return this.getCardinal(orientation -= 1);
			}
		}
	};

	this.move = function(xCoordinate, yCoordinate, cardinal) {
		var orientation = this.getOrientation(cardinal);
		switch (orientation) {
			case 1:
			if (yCoordinate < this.upperY) {
				yCoordinate += 1;
			}
			else {
				console.log('out of upper y bounds, unable to move!');
			}
			break;
			case 2:
			if (yCoordinate < this.upperX) {
				xCoordinate += 1;
			}
			else {
				console.log('out of upper x bounds, unable to move!');
			}
			break;
			case 3:
			if (yCoordinate > 0) {
				yCoordinate -= 1;
			} else {
				console.log('out of lower y bounds, unable to move!');
			}
			break;
			case 4:
			if (xCoordinate > 0) {
				xCoordinate -= 1;
			}
			else {
				console.log('out of lower x bounds, unable to move!');
			}
			break;
		}
		return this.getPosition(xCoordinate, yCoordinate, cardinal);
	};
});