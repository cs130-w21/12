/**
 * @author Erika Shen
 * @author Jason Lai
 *
 * @module route/profile
 * @requires express
 * @requires module:service/profile-service
 * @description This module contains the endpoints for /user
 */

'use strict';

const express = require('express');

const service = require('../service/profile-service.js');
const validator = require('../util/validator.js');

/**
 * @type {object}
 * @const
 * @namespace profileRouter
 */
const router = express.Router();

/**
 * @function GET/user/
 * @memberof module:route/profile~profileRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for getting a user.
 */
router.get('/', async (req, res) => {
  try {
    const userId = req.get('userId');
    if (validator.isEmpty(userId)) {
      res.status(400).json({ message: 'User ID not found in request header' });
    } else {
      const userInfo = await service.getUserInfo(userId);
      res.status(200).json({ userInfo });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
