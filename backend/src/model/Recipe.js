/**
 * @module model/Recipe
 * @description This module contains the Javascript class representation of the Recipe table
 * in the database.
 * @requires module:model/database
 * @requires module:sequelize
 */

'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

/**
 * @class
 * @extends Sequelize.Model
 * @classdesc This class represents the Recipe table. Its attributes represent columns within
 * the table.
 * @property {int} id           - A unique identifier (primary key) for a recipe
 * @property {string} title     - The title of the recipe
 * @property {string} image_url - A string representing the URL for the recipe image
 */
class Recipe extends Sequelize.Model {}

Recipe.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  title: Sequelize.DataTypes.STRING,
  image_url: Sequelize.DataTypes.STRING,
}, {
  sequelize,
  modelName: 'recipe',
});

module.exports = Recipe;
