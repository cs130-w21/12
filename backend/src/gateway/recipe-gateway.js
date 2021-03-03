/**
 * @module gateway/recipe-gateway
 * @description This module allows the web service to act as a gateway to Spoonacular, an
 * external recipe search service.
 */

'use strict';

const https = require('https');

const config = require('../../config.js');
const validator = require('../util/validator.js');

/**
 * @async
 * @private
 * @function get
 * @param {string} url - URL to send request to
 * @param {int} reqType - Type of endpoint, used for internal logging
 * @returns {Promise} A JSON promise representing the response for the request. Evaluated by having
 * the caller await the call to this function.
 * @description This function encapsulates the functionality of Node.js https.get function to suit
 * the needs of the gateway. This function is only visible to members of this module.
 */
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
            errString = 'Error in finding recipes';
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

/**
 * @async
 * @function findRecipes
 * @param {string[]} ingredients - A string array representing the ingredients to base the recipe
 * search on
 * @param {string} cuisine - A string representing cuisine preference
 * @param {string} diet - A string representing diet preference
 * @returns {Promise} A JSON promise representing the response for the request. Evaluated by having
 * the caller await the call to this function.
 * @description This method issues a GET request to Spoonacular to search recipes by ingredients,
 * cuisine preference, and diet preference. This method wraps the functionality of the private
 * function get(url : string, reqType : int).
 */
const findRecipes = (ingredients, cuisine, diet) => get(
  `${config.credentials.search.url}\
    ${config.credentials.search.searchEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &includeIngredients=${ingredients.join(',')}\
    ${validator.isEmpty(cuisine) ? '' : '&cuisine='.concat(cuisine)}\
    ${validator.isEmpty(diet) ? '' : '&diet='.concat(diet)}`.replace(/\s+/g, ''),
  1,
);

/**
 * @async
 * @function getRecipeInformation
 * @param {int} recipeId - An integer representing the recipe ID
 * @returns {Promise} A JSON promise representing the response for the request. Evaluated by having
 * the caller await the call to this function.
 * @description This method issues a GET request to Spoonacular to get the detailed information of a
 * recipe given the recipe ID. This method wraps the functionality of the private function
 * get(url : string, reqType : int).
 */
const getRecipeInformation = (recipeId) => get(
  `${config.credentials.search.url}\
    ${recipeId}/\
    ${config.credentials.search.informationEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}`.replace(/\s+/g, ''),
  2,
);

/**
 * @async
 * @function getRandomRecipes
 * @returns {Promise} A JSON promise representing the response for the request. Evaluated by having
 * the caller await the call to this function.
 * @description This method issues a GET request to Spoonacular to get a random recipe. This method
 * wraps the functionality of the private function get(url : string, reqType : int).
 */
const getRandomRecipes = () => get(
  `${config.credentials.search.url}\
    ${config.credentials.search.randomEndpoint}\
    ?apiKey=${config.credentials.search.apiKey}\
    &number=8`.replace(/\s+/g, ''),
  3,
);

module.exports = {
  findRecipes,
  getRecipeInformation,
  getRandomRecipes,
};
