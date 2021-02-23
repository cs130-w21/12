'use strict';

const bookmarkQuery = require('../postgres/bookmark-query.js');
const recipeQuery = require('../postgres/recipe-query.js');
const validator = require('../util/validator.js');

const getBookmarks = async (userId) => {
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

const getOneBookmark = async (userId, recipeId) => {
  const bookmark = await bookmarkQuery.getBookmarkByIds(userId, recipeId);
  if (validator.isEmpty(bookmark)) {
    return {};
  }
  return { userId: bookmark.userId, recipeId: bookmark.recipeId };
};

const addBookmark = async (userId, recipeId) => {
  const f = await bookmarkQuery.addBookmark(userId, recipeId);
  return f;
};

const deleteBookmark = async (userId, recipeId) => {
  const deletedRows = await bookmarkQuery.deleteBookmark(userId, recipeId);
  return deletedRows;
};

module.exports = {
  getBookmarks,
  getOneBookmark,
  addBookmark,
  deleteBookmark,
};
