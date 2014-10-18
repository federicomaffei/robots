'use strict';

var _ = require('lodash');
var Robot = require('./robot.model');

// Get list of robots
exports.index = function(req, res) {
  Robot.find(function (err, robots) {
    if(err) { return handleError(res, err); }
    return res.json(200, robots);
  });
};

// Get a single robot
exports.show = function(req, res) {
  Robot.findById(req.params.id, function (err, robot) {
    if(err) { return handleError(res, err); }
    if(!robot) { return res.send(404); }
    return res.json(robot);
  });
};

// Creates a new robot in the DB.
exports.create = function(req, res) {
  Robot.create(req.body, function(err, robot) {
    if(err) { return handleError(res, err); }
    return res.json(201, robot);
  });
};

// Updates an existing robot in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Robot.findById(req.params.id, function (err, robot) {
    if (err) { return handleError(res, err); }
    if(!robot) { return res.send(404); }
    var updated = _.merge(robot, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, robot);
    });
  });
};

// Deletes a robot from the DB.
exports.destroy = function(req, res) {
  Robot.findById(req.params.id, function (err, robot) {
    if(err) { return handleError(res, err); }
    if(!robot) { return res.send(404); }
    robot.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}