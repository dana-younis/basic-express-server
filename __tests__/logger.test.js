const loggerMiddleware = require('../src/middleware/logger.js');
describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
   
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs some output correctly', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('go to the next middleware correctly', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});