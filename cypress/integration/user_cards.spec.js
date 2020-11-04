describe('Viewing user cards', () => {
  it('shows a list of cards', () => {
    cy.visit('http://localhost:3000');

		cy.get('[data-testid="userCards"]')
		.should('have.value', 'Tianna')
    //   .type('New message');

    // cy.get('[data-testid="sendButton"]')
    //   .click();

    // cy.get('[data-testid="messageText"]')
    //   .should('have.value', '');

    // cy.contains('New message');
  });
});