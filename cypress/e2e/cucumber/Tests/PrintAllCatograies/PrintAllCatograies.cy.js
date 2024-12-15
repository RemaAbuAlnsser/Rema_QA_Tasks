import { Given, Then} from "cypress-cucumber-preprocessor/steps";

Given ("The user navigate to magento website", ()=>{
    cy.visit("/");
})
When ("Click on What's New",()=>{
    cy.get("[role='menuitem']").contains("What's New").click()
})

Then ("I locate the New In Women's section That all categories in the new in womens are available", ()=>{ 
    cy.get('.categories-menu > :nth-child(2)').then((categories)=>{
        //cy.log(products.length)
        for (let i = 0; i < categories.length; i++) {
         cy.wrap(categories[i]).invoke('text').then((categoriesName)=>{
            cy.log(categoriesName)
        })
        }
        })


})
