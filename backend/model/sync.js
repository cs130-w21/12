/**
 * @module model/sync
 * @description This module synchronizes the connection to the database.
 * @requires module:model/database
 * @requires module:model/User
 * @requires module:model/Bookmark
 * @requires module:model/Recipe
 */

'use strict';

const { sequelize } = require('./database.js');
require('./User.js');
require('./Bookmark.js');
require('./Recipe.js');

/**
 * @async
 * @function syncAllTables
 * @throws ConnectionError
 * @description This function tries to establish a connection to the PostgreSQL database.
 */
const syncAllTables = async () => {
  try {
    await sequelize.sync({ force: process.env.NODE_ENV !== 'production' });
    console.log('Database synchronized'); // eslint-disable-line no-console
  } catch (err) {
    console.error('Database failed to synchronize'); // eslint-disable-line no-console
    throw err;
  }
};

module.exports = syncAllTables;
