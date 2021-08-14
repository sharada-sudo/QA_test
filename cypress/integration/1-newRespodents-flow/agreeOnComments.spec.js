/// <reference types="cypress" />

describe('Agree on existing comment and validation', () => {

    it('open the QA test project', () => {
        cy.visit('/')
        cy.get('.nav-title-container')
            .invoke('text').then((el) => {
                cy.wrap(el).should('include', 'QA test project')
                cy.title()
                    .should('contain', 'Have Your Say Today – QA Test Project – Commonplace')
            })

    })
    it('click on Menu dropdown', () => {
        cy.get('.dropdown-menu').find('li').contains('All comments')
            .click({ force: true })
        cy.title().should('eq', 'Discussion & Comments on QA Test Project – Commonplace')
    })

    it('click on the agree button of the first comment', () => {
        cy.get('button').contains('Agree').eq(0).click()
        cy.url().should('include', 'email')
    })
    it('Enter the Email id & click on submit', () => {
        cy.get('#email').type('sharada.telkar1988@gmail.com')
            .should('have.value', 'sharada.telkar1988@gmail.com')
        cy.get('.btn').click()
        cy.url().should('contain', 'confirm-email')
        //The EmailId field should have the same email which was passed in the previous step
        cy.get('#email').should('have.value', 'sharada.telkar1988@gmail.com')

    })

})



