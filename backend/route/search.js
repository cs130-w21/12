'use strict';

const express = require('express');

// const gateway = require('../service/recipe-gateway');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    console.log(); // eslint-disable-line no-console
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(500).json({ message: 'Server error' });
  }
});
