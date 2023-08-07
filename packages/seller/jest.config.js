module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/test/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setupAfterEnv.ts'],
  testPathIgnorePatterns: ['/node_modules/', './build'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['node_modules', '.d.ts', 'src/index.ts'],
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(tsx|ts)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  resetModules: true,
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|svg)$':'<rootDir>/test/__mocks__/imageMock.ts',
    '.(css)$':'<rootDir>/test/__mocks__/cssMock.ts',
  },
  transform: {
    '^.+\\.tsx?$': ['babel-jest'],
  },
};
