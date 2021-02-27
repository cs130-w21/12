'use strict';

const express = require('express');

const service = require('../service/profile-service.js');

const router = express.Router();

/*
GET /user/{id}
This endpoint is used to get user information
*/
router.get('/', async (req, res) => {
  try {
    const userInfo = await service.getUserInfo(req.header.authorization);
    res.status(200).json({ userInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
