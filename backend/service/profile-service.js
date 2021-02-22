'use strict';

const queryGateway = require('../gateway/query-gateway.js');

const getUserInfo = async (userId) => {
  const user = await queryGateway.getUserInfo(userId);
  return user.avatar;
};

module.exports = { getUserInfo };
