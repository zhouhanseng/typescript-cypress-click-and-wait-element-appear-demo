describe('DOM check', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/');
  })

  it('exist', () => {
    cy.get('.home-list').should('exist');
  })

})
