/**
 * @author Jason Lai
 * @author Mingchao Lian
 *
 * @module service/bookmark-service
 * @description This module is an application service for interacting with the Bookmark objects.
 * @requires module:postgres/user-query
 * @requires module:postgres/bookmark-query
 * @requires module:postgres/recipe-query
 */

'use strict';

const userQuery = require('../postgres/user-query.js');
const bookmarkQuery = require('../postgres/bookmark-query.js');
const recipeQuery = require('../postgres/recipe-query.js');
const validator = require('../util/validator.js');

/**
 * @async
 * @function getBookmarks
 * @param {string} userId - User ID
 * @returns {Recipe[]} An array of recipes bookmarked by user
 * @description This method gets all the bookmarks for a specific user from the database given the
 * user's ID.
 */
const getBookmarks = async (userId) => {
  await userQuery.ensureUser(userId);
  const bookmarks = await bookmarkQuery.getBookmarks(userId);
  const recipeIds = bookmarks.map((b) => b.recipeId);
  const recipePromises = [];
  for (const recipeId of recipeIds) {
    recipePromises.push(recipeQuery.getRecipeByRecipeId(recipeId));
  }
  const recipes = await Promise.all(recipePromises);
  return recipes.map((r) => ({
    id: r.id,
    title: r.title,
    imageUrl: r.image_url,
  }));
};

/**
 * @async
 * @function getOneBookmark
 * @param {string} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {object} An object containing the user ID and recipe ID if the user bookmarked the given
 * recipe; an empty object if the user did not bookmark the given recipe
 * @description This method checks if the given user has bookmarked the given recipe by querying the
 * database.
 */
const getOneBookmark = async (userId, recipeId) => {
  await userQuery.ensureUser(userId);
  const bookmark = await bookmarkQuery.getBookmarkByIds(userId, recipeId);
  if (validator.isEmpty(bookmark)) {
    return {};
  }
  return { userId: bookmark.userId, recipeId: bookmark.recipeId };
};

/**
 * @async
 * @function addBookmark
 * @param {string} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {int} An indicator of how many rows were added into the database. If return value is 1,
 * operation was correctly performed; otherwise, an unexpected error occured.
 * @description This method adds a recipe bookmark for a user.
 */
const addBookmark = async (userId, recipeId) => {
  await userQuery.ensureUser(userId);
  const f = await bookmarkQuery.addBookmark(userId, recipeId);
  return f;
};

/**
 * @async
 * @function deleteBookmark
 * @param {string} userId - User ID
 * @param {int} recipeId - Recipe ID
 * @returns {int} An indicator of how many rows were deleted from the database. If return value is
 * 1, operation was correctly performed; otherwise, an unexpected error occured.
 * @description This method removes a recipe bookmark for a user.
 */
const deleteBookmark = async (userId, recipeId) => {
  await userQuery.ensureUser(userId);
  const deletedRows = await bookmarkQuery.deleteBookmark(userId, recipeId);
  return deletedRows;
};

module.exports = {
  getBookmarks,
  getOneBookmark,
  addBookmark,
  deleteBookmark,
};
