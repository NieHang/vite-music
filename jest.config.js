module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'vue'],
}
