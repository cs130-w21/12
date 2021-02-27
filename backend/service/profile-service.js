/**
 * This module is an application service for interacting with the User objects.
 * @module service/profile-service
 */

'use strict';

const userQuery = require('../postgres/user-query.js');

/**
 * @async
 * @method
 * @param {String} userId - User ID
 * @returns {User} User object
 *
 * This method gets a user from the database with a user ID.
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
