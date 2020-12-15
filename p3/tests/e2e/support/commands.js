// https://on.cypress.io/custom-commands

// User
let adminUser = {
    name: 'Jill Harvard',
    email: 'jill@harvard.edu',
    password: 'asdfasdf'
}

let nonAdmin = {
  name: 'Jamal Harvard',
  email: 'jamal@harvard.edu',
  password: 'asdfasdf'
}

let login = user => {
  cy.visit('/account');
  cy.get('[data-test=email-input]').clear().type(user.email);
  cy.get('[data-test=password-input]').clear().type(user.password);
  cy.get('[data-test=login-button]').click();
  cy.contains('[data-test="welcome-message"]', user.name);
}

Cypress.Commands.add('adminLogin', () => {
  login(adminUser);
})

Cypress.Commands.add('nonAdminLogin', () => {
  login(nonAdmin);
})
