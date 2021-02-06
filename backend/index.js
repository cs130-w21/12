'use strict';

const express = require('express');
const cors = require('cors');

const ingredients = require('./ingredients.json');
const syncAllTables = require('./model/sync.js');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json(ingredients);
});

const port = 8080;

(async () => {
  await syncAllTables();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`); // eslint-disable-line no-console
  });
})();
