import 'cypress-iframe';
class Keywords{
    
    url(){
    cy.visit('https://demoqa.com/automation-practice-form')
   
    }
    qafirstname(firstname)
    {
        cy.reload()
        cy.log(" Successfully page refreshed")
        cy.get('#firstName').type(firstname)
        cy.clearCookies()
        cy.screenshot('firstname successfully entered')
    }
   

    qaemail(mail)
{
    cy.xpath('//input[@id="userEmail"]').type(mail)
  const mail1=  cy.log( mail  , ": entered into textbox successfully" )
     mail1.wrap(mail).and('eq',mail)
    //cy.xpath('//input[@value="FeMale"]').click()
  // cy.window().should('have.property','top')
   //cy.wait(3000)
  // cy.go('back')
  // cy.go('forward')
   cy.wait(3000)
   cy.scrollTo('bottom')
   cy.wait(3000)
}
wrapkeyword(address)
{
const add = cy.xpath('//textarea[@id="currentAddress"]').type(address)
//cy.wrap({name1 : 'Anantapur,AP'}).invoke('text').should('eq','Anantapur,AP')
//add.and('eq',address)
}



//nested frame
/*cy.xpath('(//a[@class="analystic"])[2]').click()
cy.get('//iframe[@src="MultipleFrames.html"]').within(($iframe)=>{
cy.wrap($iframe.contents()).find()

frame1.xpath('//*[@src="SingleFrame.html"]')
//const frame2=cy.xpath('src="SingleFrame.html"')
frame1.xpath('//input[@type="text"]').type('nestedframe')
   //viewort*/

   
   

qadatepicker()
{
    cy.visit('http://demo.automationtesting.in/Datepicker.html')
  //  const timeSolver = require('timeSolver');
   const date= cy.xpath('//*[@id="datepicker2"]').click()
   date.type("10/01/2021")

}
qaintercept()
{
   cy.intercept('https://demoqa.com/elements')
}


}
export default Keywords