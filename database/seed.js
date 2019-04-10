const db = require('./index.js');
const SingleOwner = require('./schema.js').SingleOwner;
const fake = require('../data.js').fakedata;

const fakeHostData = fake;
const insertSampleSingleOwners = function () {
  SingleOwner.create(fakeHostData)
    .then(() => db.close());
};

insertSampleSingleOwners();
