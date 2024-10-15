/// <reference types="cypress" />


describe('Basic quarey ', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    
 /* it('GET', () => {

    cy.get('#login-button');
    cy.get('[data-test="username"]')
    cy.contains('#login-button','Login')
    //cy.get('form').invoke('hide')
  //  cy.get('input[value="Login"]').invoke('val').should('eq', 'Login')
    cy.get('input').filter('[placeholder="Username"]')
    cy.get('input').eq(1)
    cy.get('input').not('[placeholder="Username"]')
    cy.get('[data-test="login-button"]').as('LoginButton')
    cy.get('@LoginButton').click()
    cy.get('[data-test="error"]').as('erroe')
    cy.get('@erroe').invoke('text').should('eq' , 'Epic sadface: Username is required')
    cy.get('input').each((item, index, $list) => {
      // $item - поточний елемент
      // index - індекс поточного елемента
      // $list - список всіх елементів
      cy.log(index)
      item.
      cy.wrap(item).click(); // Наприклад, натискання на кожен елемент
    }); 
    //cy.contains('Login').prevAll();
   /*cy.log('DEBUG:')
    cy.get('[data-test="error"]').invoke('text').then((text) => {
      cy.log(text)
      expect(text).to.equal('Epic sadface: Username is required')
    }) 

      const msg = "this is text"
      cy.wrap(msg).should('eq' , 'this is text')
  }) */

/*
  let errorMSG
  it('Text', () => {
    cy.get('[data-test="error"]').invoke('text').then((text) => {
  
      errorMSG = text;
    })
// КРОКИ Тесту 
cy.get('input').eq(1)
// 
cy.get('[data-test="error"]').invoke('text').then((newText) =>{
  expect(newText).to.equal(errorMSG)
}) 
  }) 
it('Text alias', () => {
  cy.get('[data-test="error"]').invoke('text').as('saveErrorMSG')
  // КРОКИ Тесту 
cy.get('input').eq(1)
// 
cy.get('@saveErrorMSG').then((saveText) => {
  cy.get('[data-test="error"]').invoke('text').should('equal', saveText)
})
}) */

it('Login', () => {

  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[placeholder="Password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();

})

})