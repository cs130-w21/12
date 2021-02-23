'use strict';

const queryGateway = require('../gateway/query-gateway.js');
const userQuery = require('../postgres/user-query.js');

const getUserInfo = async (userId) => {
  const user = await queryGateway.getUserInfo(userId);
  return user.avatar;
};

const createNewUser = async (userId) => {
  await userQuery.ensureUser(userId);
};

module.exports = {
  getUserInfo,
  createNewUser,
};
