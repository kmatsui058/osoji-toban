/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  testEnvironment: 'node',
  globalSetup: './jest.setup.ts',
};