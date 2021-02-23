'use strict';

const recipeGateway = require('../gateway/recipe-gateway.js');
const recipeQuery = require('../postgres/recipe-query.js');

const cleanUpBulkRecipes = (recipes) => recipes.map((r) => ({
  id: r.id,
  title: r.title,
  imageUrl: r.image,
}));

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

const findRecipes = async (ingredients, cuisine, diet) => {
  const result = await recipeGateway.findRecipes(ingredients.map((i) => i.replace(/\s+/g, '+')), cuisine, diet);
  const recipes = cleanUpBulkRecipes(result.results);
  for (const recipe of recipes) {
    await recipeQuery.ensureRecipe(recipe); // eslint-disable-line no-await-in-loop
  }
  return recipes;
};

const getRecipeInfo = async (recipeId) => {
  const result = await recipeGateway.getRecipeInformation(recipeId);
  return cleanUpRecipeInfo(result);
};

const getRandomRecipes = async () => {
  const result = await recipeGateway.getRandomRecipes();
  const recipes = cleanUpBulkRecipes(result.recipes);
  for (const recipe of recipes) {
    await recipeQuery.ensureRecipe(recipe); // eslint-disable-line no-await-in-loop
  }
  return recipes;
};

module.exports = { findRecipes, getRecipeInfo, getRandomRecipes };
