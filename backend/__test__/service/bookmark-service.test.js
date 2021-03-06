/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

const bookmarkQuery = require('../../src/postgres/bookmark-query.js');
const bookmarkService = require('../../src/service/bookmark-service.js');
const recipeQuery = require('../../src/postgres/recipe-query.js');
const userQuery = require('../../src/postgres/user-query.js');
const testCases = require('../test-cases.json');

describe('Test get all user bookmarks app service', () => {
  it('Should succeed', async () => {
    userQuery.ensureUser = jest.fn(() => Promise.resolve());
    bookmarkQuery.getBookmarks = jest.fn(() => [testCases.bookmark['9f50a9ff-273b-42df-8438-9e5adb6c675e']]);
    recipeQuery.getRecipeByRecipeId = jest.fn(() => testCases.recipe[640136]);

    await bookmarkService.getBookmarks('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(userQuery.ensureUser).toBeCalledTimes(1);
    expect(bookmarkQuery.getBookmarks).toBeCalledTimes(1);
    expect(recipeQuery.getRecipeByRecipeId).toBeCalledTimes(1);
  });
});

describe('Test adding user bookmark', () => {
  it('Should succeed', async () => {
    userQuery.ensureUser = jest.fn(() => Promise.resolve());
    bookmarkQuery.addBookmark = jest.fn(() => Promise.resolve());

    await bookmarkService.addBookmark('9f50a9ff-273b-42df-8438-9e5adb6c675e', 640136);
    expect(userQuery.ensureUser).toBeCalledTimes(1);
    expect(bookmarkQuery.addBookmark).toBeCalledTimes(1);
  });
});

describe('Test deleting user bookmark', () => {
  it('Should succeed', async () => {
    userQuery.ensureUser = jest.fn(() => Promise.resolve());
    bookmarkQuery.deleteBookmark = jest.fn(() => Promise.resolve());

    await bookmarkService.deleteBookmark('9f50a9ff-273b-42df-8438-9e5adb6c675e', 640136);
    expect(userQuery.ensureUser).toBeCalledTimes(1);
    expect(bookmarkQuery.deleteBookmark).toBeCalledTimes(1);
  });
});
