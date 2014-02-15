'use strict';

var mongoose = require('mongoose'),
	Wish = mongoose.model('Wish');


/* get for user: GET /api/user/{id}/wish */
exports.getForUser = function (req, res, next) {
  Wish.find({user: req.pUser._id})
      .populate('createdBy', 'name')
      .populate('fulfilledBy', 'name')
      .exec(function (err, wishes) {
  	if (err) res.send(500, err);
    else res.json(wishes);
  });
};

/* add: POST /api/user/{id}/wish */
exports.create = function (req, res) {
  var newWish = new Wish(req.body);
  newWish.createdBy = req.user._id;
  newWish.user = req.pUser._id;
  newWish.save(function (err) {
  	if (err) res.json(400, err);
  	else res.json(newWish);
  });
}