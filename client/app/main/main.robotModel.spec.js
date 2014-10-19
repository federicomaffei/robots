'use strict';

describe('Model: Robot', function() {

	var robot;

	beforeEach(function() {
		module('robotsApp');
		inject(function(Robot) {
			robot = Robot;
		});
	});

	it('can convert a number to a cardinal', function(){
		expect(robot.getCardinal(1)).toEqual('N');
	});

	it('can convert a cardinal to a number', function(){
		expect(robot.getOrientation('N')).toEqual(1);
	});

	it('can format the position string', function(){
		expect(robot.getPosition(0, 0, 'N')).toEqual('0 0 N');
	});

	describe('rotating the robot', function(){
		it('from north to east', function(){
			expect(robot.rotate('R', 'N')).toEqual('E');
		});

		it('from north to west', function(){
			expect(robot.rotate('L', 'N')).toEqual('W');
		});

		it('from west to north', function(){
			expect(robot.rotate('R', 'W')).toEqual('N'); 
		});
	});

	describe('moving the robot', function(){
		it('towards north', function(){
			expect(robot.move(0, 0, 'N')).toEqual('0 1 N');
		});
		it('towards east', function(){
			expect(robot.move(0, 0, 'E')).toEqual('1 0 E');
		});
		it('towards west', function(){
			expect(robot.move(1, 1, 'W')).toEqual('0 1 W');
		});
		it('towards south', function(){
			expect(robot.move(1, 1, 'S')).toEqual('1 0 S');
		});
	});

	describe('handling a list of actions', function(){
		it('returns the expected value, as in acceptance test 1', function(){
			expect(robot.executeActions('LMLMLMLMM', '1 2 N')).toEqual('1 3 N');
		});
		it('returns the expected value, as in acceptance test 2', function(){
			expect(robot.executeActions('MMRMMRMRRM', '3 3 E')).toEqual('5 1 E');
		});
	});
});
