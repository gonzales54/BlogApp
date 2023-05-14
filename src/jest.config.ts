const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {  
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  preset: "ts-jest",
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'node',
  roots: ["<rootDir>/src"],
  verbose: true,
  globalSetup: '<rootDir>/src/__test__/setup/setup.ts',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules"
  ],
  testMatch: ["**/__test__/node/HomeGetServerSideProps.test.ts"], 
  globals: {
    'ts-jest': {
        useESM: true
    }
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);