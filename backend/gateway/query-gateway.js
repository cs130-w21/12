'use strict';

const { sequelize } = require('../model/database.js');

const User = require('../model/User.js');
const Bookmark = require('../model/Bookmark.js');

const getUserInfo = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

const getBookmarks = (userId) => 
  sequelize.transaction((t) => 
    Bookmark.findAll({
      where: { uuid: userId },
      transaction: t
    })
  );

const deleteBookmark = (userId, recipeId) => 
  sequelize.transaction((t) => 
    Bookmark.destroy({
      where: { uuid: userId, recipeId: recipeId },
      transaction: t
    })
  );

const addBookmark = (userId, recipeId) => 
  sequelize.transaction((t) => 
    Bookmark.findOrCreate({
      where: { uuid: userId, recipeId: recipeId },
      transaction: t
    })
  );

module.exports = {
  getUserInfo, getBookmarks, addBookmark, deleteBookmark
};
