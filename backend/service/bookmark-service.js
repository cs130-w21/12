'use strict';

const queryGateway = require('../gateway/query-gateway.js');

const getBookmarks = async (userId) => {
  const bookmarks = await queryGateway.getBookmarks(userId);
  return bookmarks;
};

const addBookmark = async (userId, recipeId) => {
  const f = await queryGateway.addBookmark(userId, recipeId);
  return f;
};

const deleteBookmark = async (userId, recipeId) => {
  const deletedRows = await queryGateway.deleteBookmark(userId, recipeId);
  return deletedRows;
};

module.exports = { getBookmarks, addBookmark, deleteBookmark };
