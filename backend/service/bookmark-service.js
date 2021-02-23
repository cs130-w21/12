'use strict';

const queryGateway = require('../gateway/query-gateway.js');

const getBookmarks = async (userId) => {
  const bookmarks = await queryGateway.getBookmarks(userId);
  return bookmarks;
};

const addBookmark = async (userId, recipeId) => {
  const user = await queryGateway.addBookmark(userId, recipeId);
  return 
};

const deleteBookmark = async (userId, recipeId) => {
  const user = await queryGateway.deleteBookmark(userId, recipeId);
  return 
};

module.exports = { getBookmarks, addBookmark, deleteBookmark };
