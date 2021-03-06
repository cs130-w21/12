/**
 * @module model/User
 * @description This module contains the Javascript class representation of the User table
 * in the database.
 * @requires module:model/database
 * @requires module:sequelize
 */

'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');
const Bookmark = require('./Bookmark.js');

/**
 * @class
 * @extends Sequelize.Model
 * @classdesc This class represents the User table. Its attributes represent columns within
 * the table.
 * @property {string} uuid - A unique identifier (primary key) for a user
 */
class User extends Sequelize.Model {}

User.init({
  uuid: {
    type: Sequelize.DataTypes.STRING,
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
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
