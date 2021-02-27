/**
 * This module encapsulates access to the User table.
 * @module postgres/user-query
 */

'use strict';

const { sequelize } = require('../model/database.js');
const User = require('../model/User.js');

/**
 * @async
 * @function getUserInfo
 * @param {String} userId - User ID
 */
const getUserInfo = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

/**
 * @async
 * @function ensureUser
 * @param {String} userId - User ID
 */
const ensureUser = (userId) => sequelize.transaction((t) => User.findOrCreate({
  where: { uuid: userId },
  transaction: t,
}));

module.exports = {
  getUserInfo,
  ensureUser,
};
