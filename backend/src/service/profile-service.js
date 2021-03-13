/**
 * @author Erika Shen
 * @author Jason Lai
 *
 * @module service/profile-service
 * @description This module is an application service for interacting with the User objects.
 * @requires module:postgres/user-query
 */

'use strict';

const userQuery = require('../postgres/user-query.js');

/**
 * @async
 * @function getUserByUserId
 * @param {string} userId - User ID
 * @returns {User} User object
 * @description This method gets a user from the database with a user ID.
 */
const getUserByUserId = async (userId) => {
  await userQuery.ensureUser(userId);
  const user = await userQuery.getUserInfo(userId);
  delete user.id;
  delete user.createdAt;
  delete user.updatedAt;
  return user;
};

module.exports = {
  getUserByUserId,
};
