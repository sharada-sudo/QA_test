/// <reference types="cypress" />
//new respondent agreeing on the comments and created the function which creates random string and passed in the email address 

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
        cy.get('#email').type(userID_Alpha() + '@gmail.com')
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        cy.get('.btn').click()
        cy.url().should('contain', 'team')
    })

    it('Click on Next button in the team page', () => {
        cy.get('button').contains('Next')
            .click()
        cy.title()
            .should('eq', 'About you')
    })

    it('Enter all the details in About you page', () => {
        cy.get('input[name="demographics.whatsYourPostcode"]').type('tw7hjh')
            .should('have.value', 'tw7hjh')
        cy.get('button').contains('I work here').click()
        cy.get('select.form-control').eq(0).select('35-44')
            .should('have.value', '35-44')
        cy.get('select.form-control').eq(1).select('Female')
            .should('have.value', 'Female')
        cy.get('select.form-control').eq(2).select('Drive it less')
            .should('have.value', 'Drive it less')
        cy.get('select.form-control').eq(3).select('Air quality is better')
            .should('have.value', 'Air quality is better')
        cy.get('select.form-control').eq(4).select('Safer than before')
            .should('have.value', 'Safer than before')
        cy.get('.bCuooH').click()
        cy.get('.btn').contains('Next').click()
        cy.url()
            .should('contain', 'preferences')
    })

    it('select the preferred optionsin final step', () => {
        cy.title().should('include', 'Final step')
        cy.get('button')
            .contains('Yes please')
            .eq(0).click()
        cy.get('button')
            .contains('Finish')
            .click()
        cy.url().should('include', 'confirm-email')
    })

})







