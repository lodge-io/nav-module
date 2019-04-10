const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

db.on('error', console.log.bind(console, 'connection error'));
db.once('open', () => (console.log('We\'re UP!')));

const singleSchema = new mongoose.Schema({
  hostid: Number,
  firstName: String,
  lastName: String,
  pic: String,
  title: String,
  city: String,
  country: String,
  guests: Number,
  beds: Number,
  bedrooms: Number,
  baths: Number,
  superHost: Boolean,
  selfCheckIn: Boolean,
  rating: Number,
  description: String,
  license: String,
});

const SingleOwner = mongoose.model('SingleOwner', singleSchema);

module.exports.SingleOwner = SingleOwner;
