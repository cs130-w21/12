/**
 * @module postgres/user-query
 * @description This module encapsulates database access to the User table.
 * @requires module:model/database
 * @requires module:model/User
 */

'use strict';

const { sequelize } = require('../model/database.js');
const User = require('../model/User.js');

/**
 * @async
 * @function getUserInfo
 * @param {UUID} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method gets exactly zero or one User object from the User table given the user
 * ID.
 */
const getUserInfo = (userId) => sequelize.transaction((t) => User.findOne({
  where: { uuid: userId },
  transaction: t,
}));

/**
 * @async
 * @function ensureUser
 * @param {UUID} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL transaction.
 * @description This method checks if the given user ID exists in the User table. If it does not
 * exist, it will insert a new row into the User table that corresponds to a User object.
 */
const ensureUser = (userId) => sequelize.transaction((t) => User.findOrCreate({
  where: { uuid: userId },
  transaction: t,
}));

module.exports = {
  getUserInfo,
  ensureUser,
};
