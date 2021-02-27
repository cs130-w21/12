'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');
const Bookmark = require('./Bookmark.js');

class User extends Sequelize.Model {}

User.init({
  uuid: {
    type: Sequelize.DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
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
