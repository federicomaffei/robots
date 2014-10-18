'use strict';

describe('Model: Robot', function() {

	var robot;

	beforeEach(function() {
		module('robotsApp');
		inject(function(Robot) {
			robot = Robot;
		});
	});

	it('is initialized with a 0 x coordinate by default', function(){
		expect(robot.xCoordinate).toEqual(0);
	});

	it('is initialized with a 0 y coordinate by default', function(){
		expect(robot.yCoordinate).toEqual(0);
	});

	it('is initialized with a default orientation of N', function(){
		expect(robot.getOrientation()).toEqual('N');
	});

	describe('rotating the robot', function(){
		it('from north to east', function(){
			robot.rotate('R');
			expect(robot.getOrientation()).toEqual('E');
		});

		it('from north to west', function(){
			robot.rotate('L');
			expect(robot.getOrientation()).toEqual('W');
		});

		it('from west to north', function(){
			robot.orientation = 4;
			robot.rotate('R');
			expect(robot.getOrientation()).toEqual('N'); 
		});
	});

	describe('moving the robot', function(){
		it('towards north', function(){
			robot.move();
			expect(robot.yCoordinate).toEqual(1);
		});
		it('towards east', function(){
			robot.rotate('R');
			robot.move();
			expect(robot.xCoordinate).toEqual(1);
		});
		it('towards west', function(){
			robot.xCoordinate = 1;
			robot.rotate('L');
			robot.move();
			expect(robot.xCoordinate).toEqual(0);
		});
		it('towards south', function(){
			robot.yCoordinate = 1;
			robot.rotate('L');
			robot.rotate('L');
			robot.move();
			expect(robot.yCoordinate).toEqual(0);
		});
	});

	
});
