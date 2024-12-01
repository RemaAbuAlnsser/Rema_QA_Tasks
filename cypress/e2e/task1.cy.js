/// <refrence types = " cypress" />

describe ("Solve_Task1 ",()=> {
    it ('Choose The Beast Selectors',()=> {

    cy.visit ("https://demo.productionready.io/#/register")
 cy.get(".text-xs-center.ng-binding") 
 cy.get("p.text-xs-center > [href='#/login'] ")
 // cy.get("[href='#/login']").contains("Have an account?") // this is correct , anther way 
cy.get("li.nav-item").children().eq(2)
cy.get("li.nav-item").children().contains("Home") 
cy.get("div.container > a ")
cy.get("div.container span ")
//cy.get("[type='text']")
cy.get(".form-group").first()
cy.get(".form-group").eq(1)
cy.get(".form-group").last()
cy.get("[type='submit']")

    });
    
    
    });