/**
 * @author Jason Lai
 *
 * @module route/search
 * @requires express
 * @requires module:service/recipe-service
 * @description This module contains the endpoints for /recipes
 */

'use strict';

const express = require('express');

const service = require('../service/recipe-service.js');

/**
 * @type {object}
 * @const
 * @namespace searchRouter
 */
const router = express.Router();

/**
 * @function GET/recipes/
 * @memberof module:route/search~searchRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for getting a random recipe.
 */
router.get('/', async (req, res) => {
  try {
    const recipe = await service.getRandomRecipe();
    res.status(200).json({ recipe });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @function POST/recipes/
 * @memberof module:route/search~searchRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for searching for recipes by ingredients
 * and preferences.
 */
router.post('/', async (req, res) => {
  try {
    const recipes = await service.findRecipes(
      req.body.ingredients,
      req.body.cuisine,
      req.body.diet,
      req.body.sort,
    );
    res.status(200).json({ recipes });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @function GET/recipes/:recipeID
 * @memberof module:route/search~searchRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for getting the detailed information of a recipe.
 */
router.get('/:id', async (req, res) => {
  try {
    const recipeInfo = await service.getRecipeInfo(req.params.id);
    res.status(200).json({ recipeInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
