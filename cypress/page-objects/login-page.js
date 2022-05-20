/// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit('/login');
    }

    login() {
        const usernameField = cy.get('#1-email');
        const passwordField = cy.get('[aria-label="Password"]');
        const loginBtn = cy.get('.auth0-label-submit');

        usernameField.type(Cypress.config('username'));
        passwordField.type(Cypress.config('password'));
        loginBtn.click();
    }

}