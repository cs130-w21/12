'use strict';

const Sequelize = require('sequelize');
const config = require('../config.js');

const sequelize = new Sequelize(config.credentials.database.db,
  config.credentials.database.user,
  config.credentials.database.password, {
    host: config.credentials.database.host,
    dialect: config.credentials.database.dialect,
    isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
  });

exports.sequelize = sequelize;
