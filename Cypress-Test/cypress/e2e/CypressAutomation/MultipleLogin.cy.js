
/// <reference types="cypress" />

describe('Etsy Page Open Functionality', () => {
    before(() => {
        // cy.viewport('macbook-15')
        cy.visit("/")
        cy.fixture('multiple').then((data) => {
            globalThis.data = data;
        })

        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user enters valid email', () => {
        cy.get('.login').click()
        cy.get('#email').type(data.email1, { force: true })
        cy.get('#passwd').type(data.pass1, { force: true })
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('have.text', 'My account')
        cy.get('.logout').click()
    });
    it('When the user enters valid email', () => {
        cy.get('.login').click()
        cy.get('#email').type(data.email2, { force: true })
        cy.get('#passwd').type(data.pass2, { force: true })
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('have.text', 'My account')
        cy.get('.logout').click()
    });
    it('When the user enters valid email', () => {
        cy.get('.login').click()
        cy.get('#email').type(data.email3, { force: true })
        cy.get('#passwd').type(data.pass3, { force: true })
        cy.get('#SubmitLogin').click()
        cy.get('.page-heading').should('have.text', 'My account')
    });
})