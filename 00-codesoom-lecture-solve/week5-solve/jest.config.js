module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ],
};
