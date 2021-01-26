'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const ingredients = require('./ingredients.json');

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.json(ingredients);
});

app.post('/recipes', (req, res) => {
  console.log(req.body)
})

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});
