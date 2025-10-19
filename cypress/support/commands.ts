/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      createTask(title: string, estimatedHours: number): Chainable<void>
      clearTasks(): Chainable<void>
    }
  }
}

Cypress.Commands.add('createTask', (title: string, estimatedHours: number) => {
  cy.findByRole('button', { name: /add task/i }).click()

  // Wait for form to be visible
  cy.findByLabelText(/task title/i, { timeout: 5000 }).should('be.visible')

  cy.findByLabelText(/task title/i).type(title)
  cy.findByLabelText(/estimated hours/i)
    .clear()
    .type(estimatedHours.toString())

  cy.findByRole('button', { name: /create task/i }).click({ force: true })

  cy.findByText(/task created successfully/i, { timeout: 5000 }).should(
    'be.visible'
  )

  // Wait for modal to close
  cy.wait(1000)
})

Cypress.Commands.add('clearTasks', () => {
  cy.window().then((win) => {
    win.localStorage.clear()
  })
})

export {}
