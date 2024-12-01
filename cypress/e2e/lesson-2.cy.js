/// <refrence types = " cypress" /> 
describe ("create ", ()=>
{
    it ("validate the user can create an account successfully ", ()=>
        {
            cy.visit("/customer/account/create/")
            cy.get("#firstname").type("Rema")
            cy.get("#lastname").type("abualnsser") //selector by id
            cy.get("#lastname").type("abualnsser")
            cy.get("[name=email]").type("remaabualnaser570@gmail.com")
            cy.get("[title=Password]").type("rema3231@")
            cy.get("[title='Confirm Password']").type("rema3231@") // selector by attribute the single qutation to make the 2 word on one word 
            cy.get("[title='Create an Account']").click()

        })

})
