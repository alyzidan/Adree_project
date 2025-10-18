import './commands'
import '@testing-library/cypress/add-commands'

// Import real events (optional)
import 'cypress-real-events'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests on uncaught exceptions
  return false
})
