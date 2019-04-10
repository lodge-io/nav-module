const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/hostlist';

let db = mongoose.connect(mongoUri);
db = mongoose.connection;

module.exports = db;
