'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Wish Schema
 */
var WishSchema = new Schema({
  text: String, //TODO add validation
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  fulfilledBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Wish', WishSchema);
