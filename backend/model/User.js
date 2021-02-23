'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');
const preferences = require('../constants/preferences.js');
const Bookmark = require('./Bookmark.js');

class User extends Sequelize.Model {}

User.init({
  uuid: {
    type: Sequelize.DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  diet_preference: { type: Sequelize.DataTypes.ENUM(preferences.diets) },
  cuisine_preference: { type: Sequelize.DataTypes.ENUM(preferences.cuisines) },
  avatar: { type: Sequelize.DataTypes.STRING },
}, {
  sequelize,
  modelName: 'user',
});

User.hasMany(Bookmark, {
  as: 'bookmarks',
  foreignKey: {
    name: 'userId',
    type: Sequelize.DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = User;
