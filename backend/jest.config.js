// jest.config.js
module.exports = {
  // Run tests in Node environment (useful for backend testing like with Mongoose)
  testEnvironment: 'node',

  // Automatically include this file after the environment is set up
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],

  // Look for test files with .test.js in tests/ directory
  testMatch: ['/tests//*.test.js'],

  // Optional: clear mocks between tests
  clearMocks: true,
};
