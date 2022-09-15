
/// <reference types="cypress" />

describe('Blank Form Functionality', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('invalid').then((data) => {
            globalThis.data = data;
        })

        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user click submit button on empty form, an error msg popup', () => {
        cy.get('.login').click()
        cy.get('#SubmitLogin').click()
        cy.get('ol > li').should('have.text', 'An email address required.')
    });
})