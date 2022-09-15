import Login from '../../support/PageObjects/login'
/// <reference types="cypress" />

describe('Etsy Page Open Functionality', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('login').then((data) => {
            globalThis.data = data;
        })
        
        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user type phone number below 10 digits, the button remains disable', () => {
        const loginPage= new Login();
        cy.get('.login').click()
        loginPage.getLogin()
        cy.get('.page-heading').should('have.text', 'My account')
    });
})