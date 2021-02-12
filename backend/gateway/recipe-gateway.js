'use strict';

const https = require('https');

const config = require('../config.js');
const validator = require('../util/validation.js');

const findRecipeByIngredients = (ingredients) => new Promise((resolve, reject) => {
  const url = `${config.credentials.search.url}\
    ${config.credentials.search.ingredientsEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &ingredients=${ingredients.join(',+')}`.replace(/\s+/g, '');

  console.log(`find by ingredients with ${url}`); // eslint-disable-line

  https.get(url, (res) => {
    let raw = '';

    res.on('data', (chunk) => {
      raw += chunk;
    });

    res.on('end', () => {
      try {
        if (res.statusCode !== 200) {
          return reject(new Error('Recipe API GET error: failed to find recipes by ingredients'));
        }
        const data = JSON.parse(raw);
        return resolve(data);
      } catch (e) {
        return reject(e);
      }
    });
  }).on('error', (e) => {
    reject(e);
  });
});

const searchRecipeComplex = (ingredients, cuisine, diet) => new Promise((resolve, reject) => {
  const url = `${config.credentials.search.url}\
    ${config.credentials.search.complexSearchEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &ingredients=${ingredients.join(',')}\
    ${validator.isEmpty(cuisine) ? '' : '&cuisine='.concat(cuisine)}\
    ${validator.isEmpty(diet) ? '' : '&diet='.concat(diet)}`.replace(/\s+/g, '');

  console.log(`search complex with ${url}`); // eslint-disable-line

  https.get(url, (res) => {
    let raw = '';

    res.on('data', (chunk) => {
      raw += chunk;
    });

    res.on('end', () => {
      try {
        if (res.statusCode !== 200) {
          return reject(new Error('Recipe API GET error: failed to find recipes by ingredients'));
        }
        const data = JSON.parse(raw);
        return resolve(data);
      } catch (e) {
        return reject(e);
      }
    });
  }).on('error', (e) => {
    reject(e);
  });
});

module.exports = {
  findRecipeByIngredients,
  searchRecipeComplex,
};
