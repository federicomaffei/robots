'use strict';

describe('Model: Robot', function() {

	var robot;

	beforeEach(function() {
		module('robotsApp');
		inject(function(Robot) {
			robot = Robot;
		});
		spyOn(console, 'log');
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

	it('can return grid boundaries', function() {
		robot.setBoundaries(5, 5);
		expect(robot.upperX).toEqual(5);
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
		it('correctly towards north', function(){
			expect(robot.move(0, 0, 'N')).toEqual('0 1 N');
		});
		it('correctly towards east', function(){
			expect(robot.move(0, 0, 'E')).toEqual('1 0 E');
		});
		it('correctly towards west', function(){
			expect(robot.move(1, 1, 'W')).toEqual('0 1 W');
		});
		it('correctly towards south', function(){
			expect(robot.move(1, 1, 'S')).toEqual('1 0 S');
		});
		it('if goes out of boundaries, logs a message.', function(){
			robot.setBoundaries(5, 5);
			robot.move(5, 5, 'N');
			expect(console.log).toHaveBeenCalledWith('out of upper y bounds, unable to move!');
		});
		it('if goes out of boundaries, does not move.', function(){
			robot.setBoundaries(5, 5);
			expect(robot.move(5, 5, 'N')).toEqual('5 5 N');
		});
	});

	describe('handling the list of actions', function(){
		it('returns the expected value, as in acceptance test 1', function(){
			expect(robot.executeActions('LMLMLMLMM', '1 2 N')).toEqual('1 3 N');
		});
		it('returns the expected value, as in acceptance test 2', function(){
			expect(robot.executeActions('MMRMMRMRRM', '3 3 E')).toEqual('5 1 E');
		});
	});
});
