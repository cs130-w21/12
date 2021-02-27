'use strict';

const { sequelize } = require('../model/database.js');
const User = require('../model/User.js');

const getUserInfo = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

const ensureUser = (userId) => sequelize.transaction((t) => User.findOrCreate({
  where: { uuid: userId },
  transaction: t,
}));

module.exports = {
  getUserInfo,
  ensureUser,
};
