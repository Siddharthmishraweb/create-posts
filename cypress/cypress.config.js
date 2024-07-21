const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // Adjust as needed
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // Example: Add a task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
    supportFile: 'cypress/support/e2e.js', // Ensure this path is correct
  },
});
