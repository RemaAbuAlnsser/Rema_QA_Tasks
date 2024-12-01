/// <refrence types = " cypress" /> 
describe ("lesson1",()=> {
it ('tc',()=> {
cy.visit ("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
cy.get("#email").type ("remaabualnaser570@gmail.com")
cy.get("#pass").type ("rema3231@")
cy.get("#send2").click ()
cy.get(".page-title").should("contain","My Account") 

});


});