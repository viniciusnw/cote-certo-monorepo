global.fetch = jest.fn();

global.localStorage = {
  key: jest.fn(),
  length: 0,
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
