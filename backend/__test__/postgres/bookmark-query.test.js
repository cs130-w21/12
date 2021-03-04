/* eslint-disable global-require */
/* eslint-disable no-undef */

'use strict';

const SequelizeMock = require('sequelize-mock');
const Bookmark = require('../../src/model/Bookmark.js');
const bookmarkQuery = require('../../src/postgres/bookmark-query.js');

const DBConnectionMock = new SequelizeMock();

const BookmarkMock = DBConnectionMock.define('Bookmark', {
  id: 1,
  userId: '9f50a9ff-273b-42df-8438-9e5adb6c675e',
  recipeId: 716426,
});

describe('Test Get All Bookmarks', () => {
  it('Should get all Bookmarks for User 9f50a9ff-273b-42df-8438-9e5adb6c675e', async () => {
    Bookmark.findAll = jest.fn((id) => BookmarkMock.findAll(id));

    const bookmarks = await bookmarkQuery.getBookmarks('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(Bookmark.findAll).toBeCalledWith({
      where: { userId: '9f50a9ff-273b-42df-8438-9e5adb6c675e' },
    });
    expect(bookmarks[0].userId).toEqual('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(bookmarks[0].recipeId).toEqual(716426);
  });
});

describe('Test Add Bookmark', () => {
  it('Should succeed in adding new Bookmark for recipe 640136', async () => {
    Bookmark.findOrCreate = jest.fn((userId, recipeId) => BookmarkMock.findOrCreate({
      where: { userId, recipeId },
    }));

    const [, added] = await bookmarkQuery.addBookmark('9f50a9ff-273b-42df-8438-9e5adb6c675e', 640136);
    expect(Bookmark.findOrCreate).toBeCalledWith({
      where: { userId: '9f50a9ff-273b-42df-8438-9e5adb6c675e', recipeId: 640136 },
    });
    expect(added).toBe(true);
  });
});

describe('Test Delete Bookmark', () => {
  it('Should succeed in deleting one row from Bookmark table', async () => {
    Bookmark.destroy = jest.fn((userId, recipeId) => BookmarkMock.destroy({
      where: { userId, recipeId },
    }));

    const rowsDeleted = await bookmarkQuery.deleteBookmark('9f50a9ff-273b-42df-8438-9e5adb6c675e', 640136);
    expect(Bookmark.destroy).toBeCalledWith({
      where: { userId: '9f50a9ff-273b-42df-8438-9e5adb6c675e', recipeId: 640136 },
    });
    expect(rowsDeleted).toBe(1);
  });
});
