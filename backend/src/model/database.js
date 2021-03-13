/**
 * @author Jason Lai
 *
 * @module model/database
 * @description This module creates the sequelize object using the Sequelize ORM for the
 * purpose of database connection.
 * @requires module:sequelize
 */

'use strict';

const Sequelize = require('sequelize');
const config = require('../../config.js');

/**
 * @type {object}
 * @const
 */
const sequelize = process.env.NODE_ENV === 'production'
  ? new Sequelize(config.credentials.database.db,
    config.credentials.database.user,
    config.credentials.database.password, {
      host: config.credentials.database.host,
      dialect: config.credentials.database.dialect,
      isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(config.credentials.database.db,
    config.credentials.database.user,
    config.credentials.database.password, {
      host: config.credentials.database.host,
      dialect: config.credentials.database.dialect,
      isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    });

exports.sequelize = sequelize;
