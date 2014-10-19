'use strict';

angular.module('robotsApp')
	.service('Robot', function(){

		var xCoordinate;
		var yCoordinate;
		var orientation;
		var cardinal;
		this.cardinals = { 1: 'N' , 2: 'E', 3: 'S' , 4: 'W' };
		this.orientations = {'N': 1 ,'E': 2 ,'S': 3 , 'W': 4 };


		this.getCardinal = function() {
			return this.cardinals[this.orientation];
		};

		this.getOrientation = function() {
			return this.orientations[this.cardinal];
		};

		this.getPosition = function() {
			return this.xCoordinate + ' ' + this.yCoordinate + ' ' + this.getCardinal();
		};

		this.rotate = function(direction) {
			if(direction === 'R'){
				if(this.orientation === 4){
					this.orientation = 1;
				}
				else {
					this.orientation += 1;
				}
			}
			if(direction === 'L'){
				if(this.orientation === 1){
					this.orientation = 4;
				}
				else {
					this.orientation -= 1;
				}
			}
		};

		this.move = function() {
			switch(this.orientation) {
				case 1:
				this.yCoordinate += 1;
				break;
				case 2:
				this.xCoordinate += 1;
				break;
				case 3:
				this.yCoordinate -= 1;
				break;
				case 4:
				this.xCoordinate -= 1;
				break;
			}
		};

	});