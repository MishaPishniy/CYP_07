
describe('Basic quarey ', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    })

    it('Login', () => {

  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[placeholder="Password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();

})
})