/* eslint-disable no-undef */

'use strict';

const { ensureUser } = require('../postgres/user-query');

const bookmarkService = jest.requireMock('../service/bookmark-service.js');
jest.mock('../postgres/user-query.js', () => ({
  __esModule: true,
  ensureUser: jest.fn(() => 'p'),
}));

// const bookmark = jest.requireMock('../model/Bookmark.js');

test('the data is peanut butter', async () => {
  await expect(bookmarkService.getBookmarks('9f50a9ff-273b-42df-8438-9e5adb6c675e')).toBe(expect.anything());
});
