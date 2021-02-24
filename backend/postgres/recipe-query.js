'use strict';

const { sequelize } = require('../model/database.js');
const Recipe = require('../model/Recipe.js');

const getRecipeByRecipeId = (recipeId) => sequelize.transaction((t) => Recipe.findOne({
  where: { id: recipeId },
  transaction: t,
}));

const ensureRecipe = (r) => sequelize.transaction((t) => Recipe.findOrCreate({
  where: { id: r.id },
  defaults: { title: r.title, image_url: r.imageUrl },
  transaction: t,
}));

module.exports = {
  getRecipeByRecipeId,
  ensureRecipe,
};
