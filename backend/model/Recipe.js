'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

class Recipe extends Sequelize.Model {}

Recipe.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  url: {
    type: Sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image_url: Sequelize.DataTypes.STRING,
}, {
  sequelize,
  modelName: 'recipe',
});

module.exports = Recipe;
