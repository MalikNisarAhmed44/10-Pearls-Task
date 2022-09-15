/// <reference types="cypress" />

describe('login Functionality', () => {
    before(() => {
         cy.viewport('macbook-15')
        cy.visit("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp")
        cy.fixture('login').then((data) => {
            globalThis.data = data;
        })
        cy.clearLocalStorage()
        cy.clearCookies()
    })
    it('When the user enters all the mandatory fields and click the signup button', () => {

        cy.get('#firstName').type(data.fname)
        cy.get('#lastName').type(data.lname)
        cy.get('#username').type(data.email)
        cy.get('#passwd').type(data.pass)
        cy.get('#confirm-passwd').type(data.pass)
        cy.get('.VfPpkd-RLmnJb').eq(0).click({force: true})
        cy.get('#day').type(data.day)
        cy.get('#month').select('May')
        cy.get('#year').type(data.year)
        cy.get('#geneder').type('Male')
        cy.get('.VfPpkd-RLmnJb').eq(1).click()
        cy.contains('I agree').click()
        cy.url().should('include', '/mail/u/0/#inbox')

    });
})