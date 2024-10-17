describe('Basic quarey ', () => {
    it('Custom', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user','secret_sauce')
    })
})