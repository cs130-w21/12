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

// GET /user/bookmarks/{recipeId}
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

// POST /user/bookmarks/{recipeId}
router.post('/:id', async (req, res) => {
  try {
    const userId = req.get('userId');
    await service.addBookmark(userId, req.params.id);
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /user/bookmarks/{recipeId}
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.get('userId');
    await service.deleteBookmark(userId, req.params.id);
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
