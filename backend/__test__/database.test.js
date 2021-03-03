/* eslint-disable global-require */
/* eslint-disable no-undef */

'use strict';

const userQuery = require('../postgres/user-query.js');
// const recipeQuery = require('../service/recipe-query.js');
// const userQuery = require('../service/user-query.js');
jest.mock('../model/database.js', () => {
  const SequelizeMock = require('sequelize-mock');
  return { sequelize: new SequelizeMock() };
});

jest.mock('../model/User.js', () => () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('User', {
    uuid: '9f50a9ff-273b-42df-8438-9e5adb6c675e',
  }, {
    
  });
});

describe('Test Sequelize Mocking', () => {
  it('Should get value from mock', async () => {
    const user = await userQuery.getUserInfo('9f50a9ff-273b-42df-8438-9e5adb6c675e');
    expect(user.uuid).toEqual('9f50a9ff-273b-42df-8438-9e5adb6c675e');
  });
});
