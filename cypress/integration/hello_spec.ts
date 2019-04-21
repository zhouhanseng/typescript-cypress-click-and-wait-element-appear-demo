describe('DOM check', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/waiting');
  })

  it('exist', () => {
    cy.get('button.network-btn').click();
    cy.get('div.network-comment', {timeout: 3000}).should('exist');
  })

})
