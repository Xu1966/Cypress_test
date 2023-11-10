/// <reference types="cypress" />

describe('automation test suite', () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
    })
    it('Time test', ()=>{
        cy.contains("Time").click();
        cy.get(".oxd-topbar-header-breadcrumb").should("contain", "Time")
        cy.get("[data-v-75e744cd]").children("input").type("Paul")
        cy.get('[type="submit"]').click()
    
    })
})