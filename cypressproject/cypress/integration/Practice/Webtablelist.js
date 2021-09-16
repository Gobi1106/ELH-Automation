///<reference types="Cypress" />
class Webtablelist{
  
    tableurl(){
    cy.visit('https://demoqa.com/webtables')
   }
   webtablename(tablefname1)
   {
    const tablename=cy.xpath('//*[text()="'+tablefname1+'"]').should('be.visible')
     
    cy.xpath('//*[@class="rt-tr-group"]//*[text()="'+tablefname1+'"]//../..//*[@title="Edit"]').click()
   }
   editfname(fname)
   {
    const assert = require("soft-assert/lib/assertion");
    
       cy.xpath('//input[@value="Alden" and @id="firstName"]').invoke('attr','value').then((webtablefname)=>{
      // var fnametext=new String(fname1)
       cy.log("firstname text :" + webtablefname.toString())
     // assert.softAssert(webtablefname,fname,"firstname visibles here")
      expect(webtablefname).to.equal(fname)

   })
   }
   editpagelname(lastname1){
    const assert = require("soft-assert/lib/assertion");
    cy.xpath('//input[@value="Cantrell" and @id="lastName"]').invoke('attr','value').then((webpagelastdata)=>{
    cy.log("Lastname text:" + webpagelastdata.toString())
    expect(webpagelastdata).to.equal(lastname1)
   })
   }
   editpageemail(webtableemail){
      const assert = require("soft-assert/lib/assertion");
    cy.xpath('//*[@value="alden@example.com" and @id="userEmail"]').invoke('attr','value').then((webpageemail1)=>{
    cy.log("Email text:" + webpageemail1.toString())
    expect(webpageemail1).to.equal(webtableemail)
   })
}
   editpageage(webtableage){
      const assert = require("soft-assert/lib/assertion");
    cy.xpath('//*[@value="45" and @id="age"]').invoke('attr','value').then((webpageage)=>{
    cy.log("Emp age:" + webpageage.toString())
    expect(webpageage).to.equal(webtableage)
   })
}
 
editpagesalary(webtablesalary,newsalary){
   const assert = require("soft-assert/lib/assertion");
 cy.xpath('//*[@value="12000" and @id="salary"]').invoke('attr','value').then((webpagesalary)=>{
 cy.log("Emp salary:" + webpagesalary.toString())
 expect(webpagesalary).to.equal(webtablesalary)
 const totalslry=cy.xpath('//*[@value="12000" and @id="salary"]').clear()
 totalslry.type(newsalary)                       //replacing value with anothervalue
 const salary=webpagesalary.replace(webtablesalary,'["'+newsalary+'"]');
 cy.log(salary,newsalary)
 
 //clicking submit button
 cy.xpath('//*[@id="submit"]').click()
 cy.wait(3000)

 //checking replaced salary
const replacedsalary = cy.xpath('(//*[text()="Alden"]/following::div)[4]').invoke('text').then((rsalary)=>{
cy.log("replaced salary :" + rsalary);
expect(webpagesalary).to.not.equal(rsalary)
})
 })
}

getrowdata()
{
   cy.get(".rt-table")
   .within(()=>{
      cy.get('[role="rowgroup"].rt-tr-group')
      .should('have.length',10)
      cy.log(1000)
cy.contains('.rt-resizable-header-content','Age').click()
cy.contains('.rt-resizable-header-content','Age').should('be.visible')

 const age = cy.xpath('//*[text()="Age"]')
.then((ages)=>{
  return cy.map(ages,(ages)=>{
     return{
        Age:Number(age.parentElement.attribute('//*[@role="row"]').value)
        
     }
  })
/* cy.get("rt-td:nth-child(2)").each((element,index,list)=>{
      const e = element.text();
      if(e.includes("39"))
      {
cy.get("rt-td:nth-child(2)").eq(index);
cy.get("input").eq(index).check();
      }*/
})
})
}
}
export default Webtablelist