describe('Register Page', () => {

  it('shows an error if information is invalid', () => {
    cy.visit('/register');
    cy.get('[data-test=email-input]').clear().type('my email');
    cy.get('[data-test=password-input]').clear().type('12345');
    cy.get('[data-test=name-input]').clear().type('A');
    cy.get('[data-test=register-button]').click();
    cy.contains('The name field must be between 2 and 50 characters.');
    cy.contains('The email format is invalid');
    cy.contains('The password field must be between 8 and 20 characters.');
  })

  it('lets a user register', () => {
    const uniqName = 'Eric' + Date.now();
    cy.visit('/register');
    cy.get('[data-test=email-input]').clear().type(uniqName + "@aol.com");
    cy.get('[data-test=password-input]').clear().type('12345678');
    cy.get('[data-test=name-input]').clear().type(uniqName);
    cy.get('[data-test=register-button]').click();
    cy.contains('[data-test="welcome-message"]', uniqName);
  })
})
