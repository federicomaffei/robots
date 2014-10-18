function Robot() {
	this.xCoordinate = 0;
	this.yCoordinate = 0;
	this.orientation = 1;
	this.cardinals = { 1: 'N', 2: 'E', 3: 'S', 4: 'W' }
}

Robot.prototype.getOrientation = function() {
	return this.cardinals[this.orientation];
};

Robot.prototype.rotate = function(direction) {
	if(direction === 'R'){
		if(this.orientation === 4){
			this.orientation = 1;
		}
		else this.orientation += 1;
	}
	if(direction === 'L'){
		if(this.orientation === 1){
			this.orientation = 4;
		}
		else this.orientation -= 1
	}
};

Robot.prototype.move = function() {
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
	};
};
