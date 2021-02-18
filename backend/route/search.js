'use strict';

const express = require('express');

const service = require('../service/recipe-service.js');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const recipes = await service.findRecipes(
      req.body.ingredients,
      req.body.cuisine,
      req.body.diet,
    );
    res.status(200).json({ recipes });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeInfo = await service.getRecipeInfo(req.params.id);
    res.status(200).json({ recipeInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/random', async (req, res) => {
  try {
    const recipes = await service.getRandomRecipes();
    res.status(200).json({ recipes });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
