'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    wishes = require('./controllers/wishes'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  app.post('/api/users', users.create);
  app.get('/api/users', users.search);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/:userId', users.show);
  app.param('userId', users.paramGetUser);

  app.get('/api/users/:userId/wish', wishes.getForUser);
  app.post('/api/users/:userId/wish', middleware.auth, users.assertSelf, wishes.create);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};