'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Wish Schema
 */
var WishSchema = new Schema({
  text: {type: String, trim: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  fulfilledBy: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now}
});

WishSchema.path('text').validate(function(text) {
  return text.length; //Text must not be empty
}, 'Text must not be empty.');

WishSchema.statics = {
  load: function (id, cb) {
    this.findOne({_id: id}).populate('user createdBy fulfilledBy').exec(cb);
  }
};

mongoose.model('Wish', WishSchema);
