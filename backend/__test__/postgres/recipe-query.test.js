/* eslint-disable global-require */
/* eslint-disable no-undef */

'use strict';

const SequelizeMock = require('sequelize-mock');
const Recipe = require('../../src/model/Recipe.js');
const recipeQuery = require('../../src/postgres/recipe-query.js');

const DBConnectionMock = new SequelizeMock();

const RecipeMock = DBConnectionMock.define('Recipe', {
  id: 640136,
  title: 'Corned Beef And Cabbage With Irish Mustard Sauce',
  imageUrl: 'https://spoonacular.com/recipeImages/640136-556x370.jpg',
});

describe('Test Get User Info', () => {
  it('Should get User uuid 9f50a9ff-273b-42df-8438-9e5adb6c675e', async () => {
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

describe('Test Ensure User', () => {
  it('Should succeed', async () => {
    Recipe.findOrCreate = jest.fn(() => Promise.resolve());

    const r = {
      id: 655145,
      title: 'Peach Pie',
      imageUrl: 'https://spoonacular.com/recipeImages/655145-556x370.jpg',
    };

    await recipeQuery.ensureRecipe(r);
    expect(Recipe.findOrCreate).toBeCalledWith({
      where: { id: 655145 },
      defaults: { title: r.title, image_url: r.imageUrl },
    });
  });
});
