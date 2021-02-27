'use strict';

const userQuery = require('../postgres/user-query.js');

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
