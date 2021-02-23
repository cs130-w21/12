'use strict';

const express = require('express');

const service = require('../service/bookmark-service.js');

const router = express.Router();

// GET /user/bookmarks/
// Get bookmarks that belong to the user

router.get('/', async (req, res) => {
  try {
    const userId = req.get('userId');
    const bookmarks = await service.getBookmarks(userId);
    res.status(200).json({ bookmarks });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = req.get('userId');
    const recipeId = req.params.id;
    const bookmark = await service.getOneBookmark(userId, recipeId);
    res.status(200).json({ bookmark });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = req.get('userId');
    await service.addBookmark(userId, req.body.recipeId);
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/', async (req, res) => {
  try {
    const userId = req.get('userId');
    await service.deleteBookmark(userId, req.body.recipeId);
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
