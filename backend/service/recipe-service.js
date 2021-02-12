'use strict';

const recipeGateway = require('../gateway/recipe-gateway.js');

const findRecipes = async (ingredients, cuisine, diet) => {
  let recipes = {};
  if (!cuisine && !diet) {
    recipes = await recipeGateway.findRecipeByIngredients(ingredients.map((i) => i.replace(/\s+/g, '+')));
  } else {
    recipes = await recipeGateway.searchRecipeComplex(ingredients.map((i) => i.replace(/\s+/g, '+')), cuisine, diet);
  }
  return recipes;
};

module.exports = { findRecipes };
