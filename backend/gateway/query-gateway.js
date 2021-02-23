'use strict';

const { sequelize } = require('../model/database.js');

const User = require('../model/User.js');

const getUserInfo = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

const getBookmarks = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

const addBookmark = (userId) => sequelize.transaction((t) => User.findOne({

}));

const deleteBookmark = (userId) => sequelize.transaction((t) => User.findOne({

}));

module.exports = {
  getUserInfo, getBookmarks, addBookmark, deleteBookmark
};
