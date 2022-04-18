// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jest-environment-jsdom',
//     transform: {
//         "^.+\\.(js|ts)$": "ts-jest",
//     },
//     transformIgnorePatterns: [
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
//     ],
//   };

  module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  };