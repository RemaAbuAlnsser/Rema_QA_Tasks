/// <refrence types = " cypress" /> 
describe ("Selectors",()=>{
    
/// <refrence types = " cypress" /> 
it("selectors_examble",()=>{
    cy.visit("https://www.telerik.com/support/demos")
 // cy.get(".u-s-mb0")
  //cy.contains("h1","Demos")
  
  //cy.get(".NavAlt-anchor.u-b0").eq(3)
  //cy.contains("Reporting")
  //cy.get("[href='#reporting']")
  
  //cy.get("#web")
  
  //cy.contains("Web")
//cy.get("li.TK-Footer-List-Item > .TK-Footer-Link ").contains("Blogs")
cy.get(".TK-Footer-List--inner.TK-Footer-List-Horizontal.TK-Footer-List-Social").first()
cy.get(".TK-Footer-List").find("li")
})
})