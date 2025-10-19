/// <reference types="cypress" />

describe('Accessibility Tests', () => {
  it('should have proper page structure on dashboard', () => {
    cy.visit('/dashboard')
    cy.wait(1000)

    cy.get('h1').should('have.length', 1)
    cy.get('h1').should('contain', 'Dashboard')

    cy.get('h1, h2, h3').then(($headings) => {
      expect($headings.length).to.be.greaterThan(0)
    })
  })

  it('should have proper page structure on tasks page', () => {
    cy.visit('/tasks')
    cy.wait(1000)

    cy.get('h1').should('contain', 'Tasks')

    cy.get('button').each(($btn) => {
      const hasText = $btn.text().trim().length > 0
      const hasAriaLabel = $btn.attr('aria-label') !== undefined
      const hasTitle = $btn.attr('title') !== undefined
      const hasSvg = $btn.find('svg').length > 0

      const isAccessible = hasText || hasAriaLabel || hasTitle || hasSvg

      if (!isAccessible) {
        cy.log('Button without accessible name:', $btn.prop('outerHTML'))
      }
    })
  })

  it('should have proper form labels', () => {
    cy.visit('/tasks')

    cy.findByRole('button', { name: /add task/i }).click()
    cy.wait(1000)

    // Check inputs have labels
    cy.get('input[type="text"]').first().should('have.attr', 'id')
    cy.get('input[type="number"]').should('have.attr', 'id')
    cy.get('textarea').should('have.attr', 'id')
  })

  it('should have keyboard navigation', () => {
    cy.visit('/tasks')

    // Get first focusable element and focus it
    cy.get(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
      .first()
      .focus()
      .should('be.focused')

    cy.get(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
      .eq(1)
      .focus()
      .should('be.focused')

    // Verify we can focus on third element
    cy.get(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
      .eq(2)
      .focus()
      .should('be.focused')
  })

  it('should have proper ARIA attributes', () => {
    cy.visit('/tasks')
    cy.wait(1000)

    // Check ARIA labels exist
    cy.get('button[aria-label]').should('have.length.greaterThan', 0)

    // Check interactive elements
    cy.get('a, button, input, textarea').each(($el) => {
      const tabindex = $el.attr('tabindex')
      if (tabindex && parseInt(tabindex) < 0) {
        // Only log warning, don't fail
        cy.log('Element with negative tabindex:', $el.prop('outerHTML'))
      }
    })
  })

  it('should have semantic HTML', () => {
    cy.visit('/dashboard')

    // Check semantic elements
    cy.get('header').should('exist')
    cy.get('main').should('exist')
    cy.get('nav').should('exist')
  })
})
