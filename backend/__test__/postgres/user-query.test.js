/* eslint-disable global-require */
/* eslint-disable no-undef */

'use strict';

const SequelizeMock = require('sequelize-mock');
const User = require('../../src/model/User.js');
const userQuery = require('../../src/postgres/user-query.js');

const DBConnectionMock = new SequelizeMock();

const UserMock = DBConnectionMock.define('User', {
  uuid: '9f50a9ff-273b-42df-8438-9e5adb6c675e',
});

describe('Test Get User Info', () => {
  it('Should get User uuid 9f50a9ff-273b-42df-8438-9e5adb6c675e', async () => {
    User.findOne = jest.fn((id) => UserMock.findOne(id));

    const user = await userQuery.getUserInfo('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(User.findOne).toBeCalledWith({
      where: { uuid: '9f50a9ff-273b-42df-8438-9e5adb6c675e' },
    });
    expect(user.uuid).toEqual('9f50a9ff-273b-42df-8438-9e5adb6c675e');
  });
});

describe('Test Ensure User', () => {
  it('Should succeed', async () => {
    User.findOrCreate = jest.fn(() => Promise.resolve());

    await userQuery.ensureUser('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(User.findOrCreate).toBeCalledWith({
      where: { uuid: '9f50a9ff-273b-42df-8438-9e5adb6c675e' },
    });
  });
});
