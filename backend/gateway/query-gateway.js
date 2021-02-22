'use strict';

const https = require('https');
const Sequelize = require('sequelize');
const { sequelize } = require('./database.js');

const config = require('../config.js');
const validator = require('../util/validator.js');

const get = (url, reqType) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
        let raw = '';

        res.on('data', (chunk) => {
            raw += chunk;
        });

        res.on('end', () => {
            try {
                if (res.statusCode !== 200) {
                    let errString = '';
                    if (reqType === 1) {
                        errString = 'Error in getting user information';
                    }
                    return reject(new Error('User Info GET error: '.concat(errString)));
                }
                const data = JSON.parse(raw);
                return resolve(data);
            } catch (e) {
                return reject(e);
            }
        });
    }).on('error', (e) => {
        reject(e);
    });
});

const getUserInfo = (id) => get(
    // TODO: actually get user info from database
  1,
);