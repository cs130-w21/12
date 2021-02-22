'use strict';

const queryGateway = require('../gateway/query-gateway.js');

const getUserInfo = async (userId) => {
    const result = await queryGateway.getUserInfo(userId);
    return result;
};

module.exports = { getUserInfo };