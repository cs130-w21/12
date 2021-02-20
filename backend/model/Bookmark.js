'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

class Bookmark extends Sequelize.Model {}

Bookmark.init({
  uuid: { type: Sequelize.DataTypes.UUID, unique: true, allowNull: false },
  recipeId: { type: Sequelize.DataTypes.UUID },
  name: Sequelize.DataTypes.STRING,
}, {
  sequelize,
  modelName: 'bookmark',
});

module.exports = Bookmark;
