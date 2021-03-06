/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

const express = require('express');
const request = require('supertest');

const bookmarkService = require('../../src/service/bookmark-service.js');
const bookmarkRoute = require('../../src/route/bookmark.js');
const testCases = require('../test-cases.json');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use('/user/bookmarks', bookmarkRoute);

describe('Test GET /user/bookmarks endpoint', () => {
  it('Should get all user bookmarks and status 200', async () => {
    bookmarkService.getBookmarks = jest.fn(() => [testCases.recipe[640136], testCases.recipe[655145]]);

    await request(app).get('/user/bookmarks')
      .expect('Content-Type', /json/)
      .expect({
        bookmarks: [testCases.recipe[640136], testCases.recipe[655145]],
      })
      .expect(200);
  });
});

describe('Test GET /user/bookmarks/:id endpoint', () => {
  it('Should return a user ID and recipe ID and status 200', async () => {
    bookmarkService.getOneBookmark = jest.fn((userId, recipeId) => ({ userId, recipeId }));

    await request(app).get('/user/bookmarks/716426')
      .set('userId', '9f50a9ff-273b-42df-8438-9e5adb6c675e')
      .expect('Content-Type', /json/)
      .expect({
        bookmark: { userId: '9f50a9ff-273b-42df-8438-9e5adb6c675e', recipeId: '716426' },
      })
      .expect(200);
  });
});

describe('Test POST /user/bookmarks/:id endpoint', () => {
  it('Should return OK and status 200', async () => {
    bookmarkService.addBookmark = jest.fn(() => Promise.resolve());

    const res = await request(app).post('/user/bookmarks/716426');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'OK' });
  });
});

describe('Test DELETE /user/bookmarks/:id endpoint', () => {
  it('Should return OK and status 200', async () => {
    bookmarkService.deleteBookmark = jest.fn(() => Promise.resolve());

    const res = await request(app).delete('/user/bookmarks/716426');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'OK' });
  });
});
