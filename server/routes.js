
'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  app.use('/api/robots', require('./api/robot'));
  
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  app.route('/*')
  .get(function(req, res) {
    res.sendfile(app.get('appPath') + '/index.html');
  });
};
