'use strict';
const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
describe('SERVER TEST:', () => {
  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/blah-blah').then((data) => {
      expect(data.status).toBe(404);
    });
  });
});
