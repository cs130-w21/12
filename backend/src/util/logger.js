'use strict';

const fs = require('fs');

const config = require('../../config.js');

const logStream = fs.createWriteStream(config.logFile, { flags: 'a' });
const log = (str) => logStream.write(str);

module.exports = { log };
