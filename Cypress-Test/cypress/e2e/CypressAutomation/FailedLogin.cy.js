
/// <reference types="cypress" />

describe('Etsy Page Open Functionality', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('invalid').then((data) => {
            globalThis.data = data;
        })

        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user enters invalid email address, an error msg popup', () => {
        cy.get('.login').click()
        cy.get('#email').type(data.email, { force: true })
        cy.get('#passwd').type(data.pass, { force: true })
        cy.get('#SubmitLogin').click()
        cy.get('ol > li').should('have.text', 'Invalid email address.')
    });
})