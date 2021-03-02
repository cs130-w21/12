/**
 * @module model/Bookmark
 * @description This module contains the Javascript class representation of the Bookmark table
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
 * @classdesc This class represents the Bookmark table. Its attributes represent columns within
 * the table.
 * @property {UUID} userId  - The user corresponding to the bookmark
 * @property {int} recipeId - The recipe bookmarked by the user
 */
class Bookmark extends Sequelize.Model {}

Bookmark.init({
  recipeId: { type: Sequelize.DataTypes.INTEGER },
}, {
  sequelize,
  modelName: 'bookmark',
});

module.exports = Bookmark;
