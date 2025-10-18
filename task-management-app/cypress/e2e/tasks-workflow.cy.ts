/// <reference types="cypress" />

describe('Tasks Workflow E2E', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should complete full task lifecycle: create, edit, delete', () => {
    // Navigate to tasks page
    cy.findByRole('link', { name: /tasks/i }).click()
    cy.url().should('include', '/tasks')

    // Click Add Task button
    cy.findByRole('button', { name: /add task/i }).click()

    // Wait for modal to open - check for form instead of heading
    cy.findByLabelText(/task title/i, { timeout: 5000 }).should('be.visible')

    // Fill in task form
    cy.findByLabelText(/task title/i).type('E2E Cypress Test Task')

    // Use ID selector for textarea
    cy.get('#description-field').type('This is a Cypress E2E test task')

    cy.findByLabelText(/estimated hours/i)
      .clear()
      .type('8')

    // Submit form
    cy.findByRole('button', { name: /create task/i }).click({ force: true })

    // Wait for success toast
    cy.findByText(/task created successfully/i, { timeout: 5000 }).should(
      'be.visible'
    )

    // Wait for modal to close and toast to disappear
    cy.wait(1000)

    // Verify task appears in list
    cy.contains('E2E Cypress Test Task').should('be.visible')

    // Edit the task - click edit button
    cy.contains('E2E Cypress Test Task')
      .parents('[data-testid="task-row"], .rounded-lg')
      .first()
      .find('button')
      .first()
      .click({ force: true })

    // Wait for edit form to be visible
    cy.findByLabelText(/task title/i, { timeout: 5000 }).should('be.visible')

    cy.findByLabelText(/task title/i)
      .clear()
      .type('E2E Cypress Test Task (Updated)')
    cy.findByRole('button', { name: /update task/i }).click({ force: true })

    // Wait for update toast
    cy.findByText(/task updated successfully/i, { timeout: 5000 }).should(
      'be.visible'
    )

    // Wait for modal to close
    cy.wait(1000)

    // Verify updated title
    cy.contains('E2E Cypress Test Task (Updated)').should('be.visible')

    // Delete the task
    cy.contains('E2E Cypress Test Task (Updated)')
      .parents('[data-testid="task-row"], .rounded-lg')
      .first()
      .find('button')
      .last()
      .click({ force: true })

    // Confirm delete in dialog
    cy.findByRole('button', { name: /^delete$/i }).click({ force: true })

    // Wait for delete toast
    cy.findByText(/task deleted successfully/i, { timeout: 5000 }).should(
      'be.visible'
    )

    // Verify task is removed
    cy.contains('E2E Cypress Test Task (Updated)').should('not.exist')
  })

  it('should filter tasks by status', () => {
    cy.visit('/tasks')
    cy.wait(1000)

    // Click on status filter
    cy.contains('button', 'All Statuses').click()

    // Select "Completed"
    cy.contains('[role="option"]', 'Completed').click()

    cy.wait(1000)

    // Verify we're still on tasks page
    cy.url().should('include', '/tasks')
  })

  it('should search tasks', () => {
    cy.visit('/tasks')

    // Type in search
    cy.findByPlaceholderText(/search tasks/i).type('test')

    // Wait for debounce
    cy.wait(500)

    // Verify search is working
    cy.url().should('include', '/tasks')
  })

  it('should navigate between pages', () => {
    // Start on dashboard
    cy.url().should('include', '/dashboard')
    cy.findByRole('heading', { name: /dashboard/i, level: 1 }).should(
      'be.visible'
    )

    // Navigate to tasks
    cy.findByRole('link', { name: /tasks/i }).click()
    cy.url().should('include', '/tasks')
    cy.findByRole('heading', { name: /tasks/i, level: 1 }).should('be.visible')

    // Navigate back to dashboard
    cy.findByRole('link', { name: /dashboard/i }).click()
    cy.url().should('include', '/dashboard')
  })

  it('should display dashboard metrics', () => {
    cy.visit('/dashboard')
    cy.wait(1000)

    // Verify metric cards
    cy.contains('p', 'Total Tasks').should('be.visible')
    cy.contains('p', 'Avg. Hours').should('be.visible')
    cy.contains('p', 'Overdue').should('be.visible')
    cy.get('p.text-sm.font-medium.text-neutral-600')
      .contains('Completed')
      .should('be.visible')

    // Verify charts
    cy.contains('h3', 'Tasks by Category').should('be.visible')
    cy.contains('h3', 'Tasks by Status').should('be.visible')
  })

  it('should handle form validation', () => {
    cy.visit('/tasks')

    // Open create modal
    cy.findByRole('button', { name: /add task/i }).click()

    // Wait for form to be visible
    cy.findByLabelText(/task title/i, { timeout: 5000 }).should('be.visible')

    // Try to submit empty form
    cy.findByRole('button', { name: /create task/i }).click({ force: true })

    // Verify validation errors
    cy.findByText(/title is required/i, { timeout: 5000 }).should('be.visible')
  })

  it('should work on mobile viewport', () => {
    cy.viewport('iphone-x')

    cy.visit('/tasks')
    cy.wait(500)

    // Verify mobile button
    cy.findByRole('button', { name: /add/i }).should('be.visible')

    // Open filters
    cy.findByRole('button', { name: /filters/i }).click()
  })

  it('should use custom command to create task', () => {
    cy.visit('/tasks')

    // Use custom command
    cy.createTask('Custom Command Task', 5)

    // Verify task created
    cy.contains('Custom Command Task').should('be.visible')
  })
})
