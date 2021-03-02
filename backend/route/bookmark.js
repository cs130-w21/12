/**
 * @module route/bookmark
 * @requires express
 * @requires module:service/bookmark-service
 * @description This module contains the endpoints for /user/bookmarks
 */

'use strict';

const express = require('express');

const service = require('../service/bookmark-service.js');

/**
 * @type {object}
 * @const
 * @namespace bookmarkRouter
 */
const router = express.Router();

/**
 * @function GET/user/bookmarks/
 * @memberof module:route/bookmark~bookmarkRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for getting all of the bookmarks of a user.
 */
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

/**
 * @function GET/user/bookmarks/:recipeID
 * @memberof module:route/bookmark~bookmarkRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for checking if a user bookmarked a recipe.
 */
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

/**
 * @function POST/user/bookmarks/
 * @memberof module:route/bookmark~bookmarkRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for adding a bookmark for a user.
 */
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

/**
 * @function DELETE/user/bookmarks/
 * @memberof module:route/bookmark~bookmarkRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 *
 * @description This specifies the endpoint for deleting a bookmark for a user.
 */
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
