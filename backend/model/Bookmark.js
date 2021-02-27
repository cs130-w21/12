'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

class Bookmark extends Sequelize.Model {}

Bookmark.init({
  recipeId: { type: Sequelize.DataTypes.INTEGER },
}, {
  sequelize,
  modelName: 'bookmark',
});

module.exports = Bookmark;
