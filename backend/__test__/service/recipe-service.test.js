/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

const recipeGateway = require('../../src/gateway/recipe-gateway.js');
const recipeService = require('../../src/service/recipe-service.js');
const recipeQuery = require('../../src/postgres/recipe-query.js');
const testCases = require('../test-cases.json');

describe('Test search recipes by ingredients', () => {
  it('Should succeed', async () => {
    recipeGateway.findRecipes = jest.fn(() => ({
      results: [testCases.recipe[640136]],
    }));
    recipeQuery.ensureRecipe = jest.fn(() => Promise.resolve());

    await recipeService.findRecipes([], '', '');
    expect(recipeGateway.findRecipes).toBeCalledTimes(1);
    expect(recipeQuery.ensureRecipe).toBeCalledTimes(1);
  });
});

describe('Test get recipe detailed information', () => {
  it('Should succeed', async () => {
    recipeGateway.getRecipeInformation = jest.fn(() => testCases.recipeInfoRaw[716426]);

    const recipe = await recipeService.getRecipeInfo(716426);
    expect(recipeGateway.getRecipeInformation).toBeCalledTimes(1);
    expect(recipe).toEqual(testCases.recipeInfoFormatted[716426]);
  });
});

describe('Test get random recipe', () => {
  it('Should succeed', async () => {
    recipeGateway.getRandomRecipe = jest.fn(() => ({
      recipes: [testCases.recipe[640136]],
    }));

    await recipeService.getRandomRecipe();
    expect(recipeGateway.getRandomRecipe).toBeCalledTimes(1);
  });
});
