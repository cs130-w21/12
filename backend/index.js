'use strict';

const express = require('express');
const cors = require('cors');

const ingredients = require('./ingredients.json');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.end('something');
});

app.post('/recipes', (req) => {
  console.log(req.body);
});

const port = process.env.PORT || 8080;

app.listen(port,'0.0.0.0', () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});
