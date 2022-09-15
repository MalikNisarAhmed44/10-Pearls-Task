import Login from '../../support/PageObjects/login'
/// <reference types="cypress" />

describe('Add to Cart Functionality', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('login').then((data) => {
            globalThis.data = data;
        })
        
        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user click add to cart button', () => {
        const loginPage= new Login();
        cy.get('.login').click()
        loginPage.getLogin()
        cy.get('.page-heading').should('have.text', 'My account')
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.get('h2 > .ajax_cart_product_txt').should('have.text', '\n\t\t\t\t\t\tThere is 1 item in your cart.\n\t\t\t\t\t')
    });
})