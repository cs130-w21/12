/**
 * @author Jason Lai
 *
 * @module service/recipe-service
 * @description This module is an application service for interacting with the Recipe objects.
 * @requires module:gateway/recipe-gateway
 * @requires module:postgres/recipe-query
 */

'use strict';

const recipeGateway = require('../gateway/recipe-gateway.js');
const recipeQuery = require('../postgres/recipe-query.js');

/**
 * @private
 * @function cleanUpBulkRecipes
 * @param {object} recipes - An array of recipes
 * @returns {Recipe[]} An array of recipes
 * @description This is a utility function only accessible to other functions of this module.
 */
const cleanUpBulkRecipes = (recipes) => recipes.map((r) => ({
  id: r.id,
  title: r.title,
  imageUrl: r.image,
}));

/**
 * @private
 * @function cleanUpRecipeInfo
 * @param {object} recipe - An object containing detailed recipe information
 * @returns {object} A concise recipe detail JSON
 * @description This is a utility function only accessible to other functions of this module.
 */
const cleanUpRecipeInfo = (recipe) => ({
  id: recipe.id,
  title: recipe.title,
  preparationTime: recipe.readyInMinutes,
  servings: recipe.servings,
  ingredients: recipe.extendedIngredients.map((i) => ({
    name: i.name,
    amount: i.amount,
    unit: i.measures,
  })),
  summary: recipe.summary,
  instructions: recipe.instructions,
  analyzedInstructions: recipe.analyzedInstructions.map((i) => ({
    name: i.name,
    steps: i.steps,
  })),
  tags: {
    vegetarian: recipe.vegetarian,
    vegan: recipe.vegan,
    glutenFree: recipe.glutenFree,
    dairyFree: recipe.dairyFree,
    sustainable: recipe.sustainable,
  },
  url: recipe.spoonacularSourceUrl,
  imageUrl: recipe.image,
});

/**
 * @async
 * @function findRecipes
 * @param {string[]} ingredients - An array of strings containing ingredients
 * @param {string} cuisine - A string containing cuisine preference
 * @param {string} diet - A string containing diet preference
 * @returns {Recipe[]} An array of Recipe objects
 * @description This method uses the recipe gateway to obtain recipes based on ingredients,
 * cuisine preference, and diet preference, then ensures that all recipes received from the
 * gateway is stored in the database.
 */
const findRecipes = async (ingredients, cuisine, diet) => {
  const result = await recipeGateway.findRecipes(ingredients.map((i) => i.replace(/\s+/g, '+')), cuisine, diet);
  const recipes = cleanUpBulkRecipes(result.results);
  for (const recipe of recipes) {
    await recipeQuery.ensureRecipe(recipe); // eslint-disable-line no-await-in-loop
  }
  return recipes;
};

/**
 * @async
 * @function getRecipeInfo
 * @param {int} recipeId - A unique integer representing a recipe ID
 * @returns {object} A recipe detail JSON
 * @description This method uses the recipe gateway to obtain detailed information of a recipe.
 */
const getRecipeInfo = async (recipeId) => {
  const result = await recipeGateway.getRecipeInformation(recipeId);
  return cleanUpRecipeInfo(result);
};

/**
 * @async
 * @function getRandomRecipe
 * @returns {Recipe} A recipe object
 * @description This method uses the recipe gateway to get a random recipe, then ensures that the
 * recipe received from the gateway is stored in the database.
 */
const getRandomRecipe = async () => {
  const result = await recipeGateway.getRandomRecipe();
  const recipe = cleanUpBulkRecipes(result.recipes)[0];
  await recipeQuery.ensureRecipe(recipe);
  return recipe;
};

module.exports = { findRecipes, getRecipeInfo, getRandomRecipe };
