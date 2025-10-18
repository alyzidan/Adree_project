import './commands'
import '@testing-library/cypress/add-commands'

import 'cypress-real-events'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
