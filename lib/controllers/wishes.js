'use strict';

var mongoose = require('mongoose'),
	Wish = mongoose.model('Wish');


/* get for user: GET /api/user/{id}/wish */
exports.getForUser = function (req, res, next) {
  Wish.find({}, function (err, wishes) {
    res.json(wishes);
  });
}
