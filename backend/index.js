'use strict';

const express = require('express');
const cors = require('cors');

const ingredients = require('./ingredients.json');
const syncAllTables = require('./model/sync.js');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json(ingredients);
  res.set('Content-Type', 'text/html');
  res.end('something');
});

app.post('/recipes', (req) => {
  console.log(req.body);
});

const port = process.env.PORT || 8080;

(async () => {
  await syncAllTables();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`); // eslint-disable-line no-console
  });
})();
