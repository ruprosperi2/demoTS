import {defineConfig} from "vite";

export default defineConfig({
  video: false,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    }
  },
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}",
    screenshotOnRunFailure: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: "cypress/e2e/support/e2e.ts",
  },
});