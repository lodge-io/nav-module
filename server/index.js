const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { SingleOwner } = require('../database/schema.js');

const app = express();
const port = 3223;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.listen(port, () => {
  console.log(`http://localhost:${port} NavBar`);
});

app.get('/api/location/:query', (req, res) => {
  // var str = req.body.loc;
  var str = req.params.query;
  var CapFirstLetter = /(\b[a-z](?!\s))/g;
  str = str.replace(CapFirstLetter, function(x){return x.toUpperCase();});
  const expression = `^${str}`
  var reg = new RegExp(expression);
  SingleOwner.find({ city: reg })
    .then(hostData => res.send(hostData))
    .catch(() => { res.status(404); });
});
