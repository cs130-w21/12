/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

const express = require('express');
const request = require('supertest');

const recipeService = require('../../src/service/recipe-service.js');
const searchRoute = require('../../src/route/search.js');
const testCases = require('../test-cases.json');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use('/recipes', searchRoute);

describe('Test GET /recipes/:id endpoint', () => {
  it('Should get recipe information and status 200', async () => {
    recipeService.getRecipeInfo = jest.fn((id) => testCases.recipeInfoFormatted[id]);

    await request(app).get('/recipes/716426')
      .expect('Content-Type', /json/)
      .expect({ recipeInfo: testCases.recipeInfoFormatted[716426] })
      .expect(200);
  });

  it('Should return status 500', async () => {
    recipeService.getRecipeInfo = jest.fn(() => Promise.reject());

    await request(app).get('/recipes/0')
      .expect('Content-Type', /json/)
      .expect({ message: 'Server error' })
      .expect(500);
  });
});

describe('Test POST /recipes endpoint', () => {
  it('Should return a list of recipes and status 200', async () => {
    recipeService.findRecipes = jest.fn(() => testCases.recipeListFormatted.chicken.recipes);

    const res = await request(app).post('/recipes')
      .type('json')
      .send({ ingredients: ['chicken'] });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(testCases.recipeListFormatted.chicken);
  });
});

describe('Test GET /recipes endpoint', () => {
  it('Should return one recipe and status 200', async () => {
    recipeService.getRandomRecipe = jest.fn(() => testCases.recipe[655145]);

    await request(app).get('/recipes')
      .expect('Content-Type', /json/)
      .expect({ recipe: testCases.recipe[655145] })
      .expect(200);
  });
});
