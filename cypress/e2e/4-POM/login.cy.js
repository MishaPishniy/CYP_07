import LoginPage from "../../support/pageObject/page/LoginPage" 
import testData from "../../fixtures/credentials.json"
import cypress from "cypress";

describe('Login ', () => {
    beforeEach(() => {
        LoginPage.open();
    })
    it('Success login test', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.correctPassword);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })
    it('Login with incorrect password', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })
    it('Login with incorrect userName', () => {
        LoginPage.login(testData.userNames.incorrectUsername, testData.passwords.correctPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })
    it('Login with correct data from fixtures', () => {
        cy.fixture('credentials').then((userFixture) => {
            LoginPage.login(userFixture.userNames.correctUsername, userFixture.passwords.correctPassword);
            cy.get('[data-test="title"]').debug().should('have.text', 'Products');
            cy.url().should('include', 'inventory.html');
        })

    })
})