export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(svg)$": "<rootDir>/svgTransform.cjs", // Agrega esta línea
    "^.+\\.scss$": "jest-css-modules-transform" // Agrega esta línea
  },
};