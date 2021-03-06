/**
 * @author Jason Lai
 * @author Mingchao Lian
 *
 * @module postgres/bookmark-query
 * @description This module encapsulates database access to the Bookmark table.
 * @requires module:model/database
 * @requires module:model/Bookmark
 */

'use strict';

const Bookmark = require('../model/Bookmark.js');

/**
 * @async
 * @function getBookmarks
 * @param {UUID} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method gets all of a user's bookmark from the Bookmark table.
 */
const getBookmarks = (userId) => Bookmark.findAll({
  where: { userId },
});

/**
 * @async
 * @function getBookmarkByIds
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method gets exactly zero or one Bookmark object from the Bookmark table given
 * the user ID and recipe ID.
 */
const getBookmarkByIds = (userId, recipeId) => Bookmark.findOne({
  where: { userId, recipeId },
});

/**
 * @async
 * @function deleteBookmark
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method deletes exactly zero or one Bookmark object from the Bookmark table
 * given the user ID and recipe ID.
 */
const deleteBookmark = (userId, recipeId) => Bookmark.destroy({
  where: { userId, recipeId },
});

/**
 * @async
 * @function addBookmark
 * @param {UUID} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method inserts exactly one Bookmark object from the Bookmark table given the
 * user ID and recipe ID.
 */
const addBookmark = (userId, recipeId) => Bookmark.findOrCreate({
  where: { userId, recipeId },
});

module.exports = {
  getBookmarks,
  getBookmarkByIds,
  deleteBookmark,
  addBookmark,
};
