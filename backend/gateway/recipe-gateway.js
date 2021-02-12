'use strict';

const https = require('https');

const config = require('../config.js');
const validator = require('../util/validation.js');

const get = (url, reqType) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let raw = '';

    res.on('data', (chunk) => {
      raw += chunk;
    });

    res.on('end', () => {
      try {
        if (res.statusCode !== 200) {
          let errString = '';
          if (reqType === 1) {
            errString = 'Error in finding recipes with complex requirements';
          } else if (reqType === 2) {
            errString = 'Error in getting detailed recipe information';
          } else if (reqType === 3) {
            errString = 'Error in getting random recipe';
          } else {
            errString = 'Unknown error';
          }
          return reject(new Error('Recipe API GET error: '.concat(errString)));
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

const findRecipes = (ingredients, cuisine, diet) => get(
  `${config.credentials.search.url}\
    ${config.credentials.search.searchEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &ingredients=${ingredients.join(',')}\
    ${validator.isEmpty(cuisine) ? '' : '&cuisine='.concat(cuisine)}\
    ${validator.isEmpty(diet) ? '' : '&diet='.concat(diet)}`.replace(/\s+/g, ''),
  1,
);

const getRecipesInformation = (recipeIds) => get(
  `${config.credentials.search.url}\
    ${config.credentials.search.informationEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &ids=${recipeIds.join(',')}`.replace(/\s+/g, ''),
  2,
);

const getRandomRecipe = () => get(
  `${config.credentials.search.url}\
    ${config.credentials.search.randomEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}`.replace(/\s+/g, ''),
  3,
);

module.exports = {
  findRecipes,
  getRecipesInformation,
  getRandomRecipe,
};
