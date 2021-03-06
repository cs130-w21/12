/**
 * @author Erika Shen
 * @author Jason Lai
 *
 * @module postgres/user-query
 * @description This module encapsulates database access to the User table.
 * @requires module:model/database
 * @requires module:model/User
 */

'use strict';

const User = require('../model/User.js');

/**
 * @async
 * @function getUserInfo
 * @param {string} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method gets exactly zero or one User object from the User table given the user
 * ID.
 */
const getUserInfo = (userId) => User.findOne({
  where: { uuid: userId },
});

/**
 * @async
 * @function ensureUser
 * @param {string} userId - User ID
 * @returns {Promise} A Promise representing the result of the SQL query.
 * @description This method checks if the given user ID exists in the User table. If it does not
 * exist, it will insert a new row into the User table that corresponds to a User object.
 */
const ensureUser = (userId) => User.findOrCreate({
  where: { uuid: userId },
});

module.exports = {
  getUserInfo,
  ensureUser,
};
