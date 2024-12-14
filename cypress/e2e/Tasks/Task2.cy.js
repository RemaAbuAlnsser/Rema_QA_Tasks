/// <refrence types = " cypress" />

describe ("Solve_Task2 ",()=> {

    beforeEach(()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt")
        cy.get("[alt='Radiant Tee']").first().click()
        cy.get("#option-label-size-143-item-167").click()
        cy.get("#option-label-color-93-item-56").click()
        cy.get("#product-addtocart-button").click()
        cy.get(".action.showcart").contains("1")
        cy.wait(3000)
    
    })
    

   it ("validate that the user can update products from the shopping cart .",()=> {
    cy.get(".action.showcart").click()
    cy.get(".product-item-name").should("be.visible")
    cy.get(".action.edit").click()
    cy.get("#option-label-size-143-item-169").click()
    cy.get("#option-label-color-93-item-57").click()
    cy.get("#product-updatecart-button").click()
    cy.get("[role='alert']").contains("Radiant Tee was updated in your shopping cart.").should("be.visible")


});

it.only ("validate that the user can submit a review on the product page",()=> {
    cy.get("#tab-label-reviews-title").click()
    cy.get('#Rating_3_label').click({ force: true });


    cy.get("#nickname_field").type("Rere")
    cy.get("#summary_field").type("About This Product")
    cy.get("#review_field").type("the best product ever , Based for me !! ")
    cy.get(".action.submit.primary").click()
    cy.get("[role='alert']").contains("You submitted your review for moderation.").should("be.visible")

});



});