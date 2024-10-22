import LoginPage from "../../support/pageObject/page/LoginPage" 
import testData from "../../fixtures/credentials.json"

describe('Login with pom inventory', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames, testData.password)
    })

    it.only('Verify sorting options number', () => {
       cy.get('[data-test="product-sort-container"] option').should('have.length',4)
    })
})