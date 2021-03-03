/**
 * @module postgres/bookmark-query
 * @description This module encapsulates database access to the Bookmark table.
 * @requires module:model/database
 * @requires module:model/Bookmark
 */

'use strict';

const { sequelize } = require('../model/database.js');
const Bookmark = require('../model/Bookmark.js');

/**
 * @async
 * @function getBookmarks
 * @param {UUID} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method gets all of a user's bookmark from the Bookmark table.
 */
const getBookmarks = (userId) => sequelize.transaction((t) => Bookmark.findAll({
  where: { userId },
  transaction: t,
}));

/**
 * @async
 * @function getBookmarkByIds
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method gets exactly zero or one Bookmark object from the Bookmark table given
 * the user ID and recipe ID.
 */
const getBookmarkByIds = (userId, recipeId) => sequelize.transaction((t) => Bookmark.findOne({
  where: { userId, recipeId },
  transaction: t,
}));

/**
 * @async
 * @function deleteBookmark
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method deletes exactly zero or one Bookmark object from the Bookmark table
 * given the user ID and recipe ID.
 */
const deleteBookmark = (userId, recipeId) => sequelize.transaction((t) => Bookmark.destroy({
  where: { userId, recipeId },
  transaction: t,
}));

/**
 * @async
 * @function deleteBookmark
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method inserts exactly one Bookmark object from the Bookmark table given the
 * user ID and recipe ID.
 */
const addBookmark = (userId, recipeId) => sequelize.transaction((t) => Bookmark.findOrCreate({
  where: { userId, recipeId },
  transaction: t,
}));

module.exports = {
  getBookmarks,
  getBookmarkByIds,
  deleteBookmark,
  addBookmark,
};
