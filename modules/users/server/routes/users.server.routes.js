'use strict';

module.exports = function (app) {
  // User Routes
  var users = require('../controllers/users.server.controller');

  // Setting up the users profile api
  // app.route('/api/users/me').get(users.me);
  // app.route('/api/users').put(users.update);
  // app.route('/api/users/password').post(users.changePassword);
  // app.route('/api/users/picture').post(users.changeProfilePicture);
  app.route('/api/auth/getUserDetails').post(users.getDetails);
  app.route('/api/auth/signout').post(users.getDetails);

  // Finish by binding the user middleware
  app.param('userId', users.userByID);
};
