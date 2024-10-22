/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        this.baseURL = Cypress.env('BASE_URL');
    }

    open(url) {
        cy.visit(url); // Используем относительный URL
    }
}
