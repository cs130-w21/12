/**
 * This module contains the endpoints for /user
 * @module route/profile
 * @requires express
 */

'use strict';

const express = require('express');

const service = require('../service/profile-service.js');

/**
 * @type {object}
 * @const
 * @namespace router
 */
const router = express.Router();

/**
 * @function GET/user/
 * @memberof module:route/profile~router
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * This specifies the endpoint for getting a user.
 */
router.get('/', async (req, res) => {
  try {
    const userInfo = await service.getUserInfo(req.get('userId'));
    res.status(200).json({ userInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
