'use strict';

angular.module('robotsApp')
	.service('Robot', function(){

		this.xCoordinate = 0;
		this.yCoordinate = 0;
		this.orientation = 1;
		this.cardinals = { 1: 'N', 2: 'E', 3: 'S', 4: 'W' };


		this.getOrientation = function() {
			return this.cardinals[this.orientation];
		};

		this.getPosition = function() {
			return this.xCoordinate + ' ' + this.yCoordinate + ' ' + this.getOrientation();
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