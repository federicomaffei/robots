/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var robot = require('./robot.model');

exports.register = function(socket) {
  robot.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  robot.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('robot:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('robot:remove', doc);
}