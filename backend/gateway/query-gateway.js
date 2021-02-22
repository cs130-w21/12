'use strict';

const https = require('https');
const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

const User = require('../model/User.js');

const getUserInfo = (userId) => new Promise((resolve, reject) => {
    try {
        const result = await sequelize.transaction(async (t) => {
            const user = await User.findOne({ where: { uid: userId }}, { transaction: t});
            return user;
        });
    } catch (e) {
        return reject(e);
    }
});

module.exports = {
    getUserInfo,
}