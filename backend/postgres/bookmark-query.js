'use strict';

const { sequelize } = require('../model/database.js');
const Bookmark = require('../model/Bookmark.js');

const getBookmarks = (userId) => sequelize.transaction((t) => Bookmark.findAll({
  where: { userId },
  transaction: t,
}));

const deleteBookmark = (userId, recipeId) => sequelize.transaction((t) => Bookmark.destroy({
  where: { userId, recipeId },
  transaction: t,
}));

const addBookmark = (userId, recipeId) => sequelize.transaction((t) => Bookmark.findOrCreate({
  where: { userId, recipeId },
  transaction: t,
}));

module.exports = {
  getBookmarks,
  deleteBookmark,
  addBookmark,
};
