'use strict';

const { sequelize } = require('./database.js');
require('./User.js');
require('./Bookmark.js');
require('./Recipe.js');

const syncAllTables = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized'); // eslint-disable-line no-console
  } catch (err) {
    console.error('Database failed to synchronize'); // eslint-disable-line no-console
    throw err;
  }
};

module.exports = syncAllTables;
