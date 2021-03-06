/* eslint-disable global-require */
/* eslint-disable no-undef */

'use strict';

const SequelizeMock = require('sequelize-mock');
const Recipe = require('../../src/model/Recipe.js');
const recipeQuery = require('../../src/postgres/recipe-query.js');
const testCases = require('../test-cases.json');

const DBConnectionMock = new SequelizeMock();

const RecipeMock = DBConnectionMock.define('Recipe', testCases.recipe[640136]);

describe('Test Get Recipe By Recipe ID', () => {
  it('Should get recipe with ID 640136', async () => {
    Recipe.findOne = jest.fn((id) => RecipeMock.findOne(id));

    const recipe = await recipeQuery.getRecipeByRecipeId(640136);
    expect(Recipe.findOne).toBeCalledWith({
      where: { id: 640136 },
    });
    expect(recipe.id).toEqual(640136);
    expect(recipe.title).toEqual('Corned Beef And Cabbage With Irish Mustard Sauce');
    expect(recipe.imageUrl).toEqual('https://spoonacular.com/recipeImages/640136-556x370.jpg');
  });
});

describe('Test Ensure Recipe', () => {
  it('Should succeed in adding new recipe', async () => {
    Recipe.findOrCreate = jest.fn(() => Promise.resolve());

    await recipeQuery.ensureRecipe(testCases.recipe[655145]);
    expect(Recipe.findOrCreate).toBeCalledWith({
      where: { id: 655145 },
      defaults: {
        title: testCases.recipe[655145].title,
        image_url: testCases.recipe[655145].imageUrl,
      },
    });
  });
});
