'use strict';

const recipeGateway = require('../gateway/recipe-gateway.js');

const cleanUpRecipesInfo = (recipesInfo) => recipesInfo.map((r) => ({
  id: r.id,
  title: r.title,
  preparationTime: r.readyInMinutes,
  servings: r.servings,
  ingredients: r.extendedIngredients.map((i) => ({
    name: i.name,
    amount: i.amount,
    unit: i.measures,
  })),
  summary: r.summary,
  instructions: r.instructions,
  analyzedInstructions: r.analyzedInstructions.map((i) => ({
    name: i.name,
    steps: i.steps,
  })),
  url: r.spoonacularSourceUrl,
  imageUrl: r.image,
}));

const findRecipes = async (ingredients, cuisine, diet) => {
  const result = await recipeGateway.findRecipes(ingredients.map((i) => i.replace(/\s+/g, '+')), cuisine, diet);
  const recipeIds = result.results.map((r) => r.id);
  const recipesInfo = await recipeGateway.getRecipesInformation(recipeIds);
  return cleanUpRecipesInfo(recipesInfo);
};

const getRandomRecipes = async () => {
  const recipesInfo = await recipeGateway.getRandomRecipes();
  return cleanUpRecipesInfo(recipesInfo.recipes);
};

module.exports = { findRecipes, getRandomRecipes };
