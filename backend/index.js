/**
 * @module index
 * @requires module:route/profile
 * @requires module:route/bookmark
 * @requires module:route/search
 */

'use strict';

const express = require('express');
const cors = require('cors');

const ingredients = require('./ingredients.json');
const syncAllTables = require('./src/model/sync.js');
const searchRouter = require('./src/route/search.js');
const profileRouter = require('./src/route/profile.js');
const bookmarkRouter = require('./src/route/bookmark.js');

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

app.use('/user', profileRouter);
app.use('/user/bookmarks', bookmarkRouter);
app.use('/recipes', searchRouter);

const port = process.env.PORT || 8080;

(async () => {
  await syncAllTables();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`); // eslint-disable-line no-console
  });
})();
