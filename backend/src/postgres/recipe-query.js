/**
 * @author Jason Lai
 *
 * @module postgres/recipe-query
 * @description This module encapsulates database access to the Recipe table.
 * @requires module:model/database
 * @requires module:model/Recipe
 */

'use strict';

const Recipe = require('../model/Recipe.js');

/**
 * @async
 * @function getRecipeByRecipeId
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method gets exactly zero or one Recipe object from the Recipe table given the
 * recipe ID.
 */
const getRecipeByRecipeId = (recipeId) => Recipe.findOne({
  where: { id: recipeId },
});

/**
 * @async
 * @function ensureRecipe
 * @param {Recipe} r - A recipe object
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method checks if the given Recipe object exists in the Recipe table. If it does
 * not exist, it will insert a new row into the Recipe table that corresponds to the given Recipe
 * object.
 */
const ensureRecipe = (r) => Recipe.findOrCreate({
  where: { id: r.id },
  defaults: { title: r.title, image_url: r.imageUrl },
});

module.exports = {
  getRecipeByRecipeId,
  ensureRecipe,
};
