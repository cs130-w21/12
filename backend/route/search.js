'use strict';

const express = require('express');

const service = require('../service/recipe-service.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await service.getRandomRecipes();
    res.status(200).json({ recipes });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

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

module.exports = router;
