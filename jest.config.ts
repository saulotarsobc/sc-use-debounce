import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@classes/(.*)$": "<rootDir>/src/classes/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
  },
};

export default config;
