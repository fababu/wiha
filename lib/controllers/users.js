'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';

  newUser.save(function(err) {
    if (err) {
      // Manually provide our own message for 'unique' validation errors, can't do it from schema
      if(err.errors.email.type === 'Value is not unique.') {
        err.errors.email.type = 'The specified email address is already in use.';
      }
      return res.json(400, err);
    }

    req.logIn(newUser, function(err) {
      if (err) return next(err);
      
      return res.json(req.user.userInfo);
    });
  });
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  res.send(req.pUser.profile);
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {

      user.password = newPass;
      user.save(function(err) {
        if (err) {
          res.send(500, err);
        } else {
          res.send(200);
        }
      });
    } else {
      res.send(400);
    }
  });
};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};

exports.search = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if (err) res.send(500, err);
    else res.json(users);
  });
};

exports.paramGetUser = function(req, res, next, userId) {
  User.findById(userId, '-salt -hashedPassword', function (err, user) {
    if (err) return next(new Error('Failed to load User'));
  
    if (user) {
      req.pUser = user;
      next();
    } else {
      next(new Error('User not found'));
    }
  });
};

exports.assertSelf = function(req, res, next) {
  if (req.user._id != req.pUser._id) res.send(403);
  else next();
};
