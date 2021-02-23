'use strict';

const express = require('express');

const service = require('../service/bookmark-service.js');

const router = express.Router();

// GET /user/bookmarks/
// Get bookmarks that belong to the user

router.get('/', async (req, res) => {
  try {
    const userInfo = await service.getUserInfo(req.header.authorization);
    res.status(200).json({ userInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userInfo = await service.getUserInfo(req.header.authorization);
    res.status(200).json({ userInfo });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
