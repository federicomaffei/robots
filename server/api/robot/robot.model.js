'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RobotSchema = new Schema({
  position: String,
});

module.exports = mongoose.model('Robot', RobotSchema);