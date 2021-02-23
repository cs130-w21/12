'use strict';

const bookmarkQuery = require('../postgres/bookmark-query.js');

const getBookmarks = async (userId) => {
  const bookmarks = await bookmarkQuery.getBookmarks(userId);
  return bookmarks;
};

const addBookmark = async (userId, recipeId) => {
  const f = await bookmarkQuery.addBookmark(userId, recipeId);
  return f;
};

const deleteBookmark = async (userId, recipeId) => {
  const deletedRows = await bookmarkQuery.deleteBookmark(userId, recipeId);
  return deletedRows;
};

module.exports = { getBookmarks, addBookmark, deleteBookmark };
