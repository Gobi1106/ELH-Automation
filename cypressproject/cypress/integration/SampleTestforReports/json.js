import "cypress-xpath"
import Jsonpractice from "./Jsonpractice"

/// <reference types = "cypress" />
//cy.screenshot({ capture: 'fullPage' });
 
describe('Demopage register', () => {
  
var fname,lname1,Address2,email1,gendernew,hobby,language
  const jsonpractice = new Jsonpractice()
  
 // const webtable = new WebTable()
 beforeEach(function(){
  Cypress.Screenshot.defaults({
    capture: 'runner',
  })

 })
  before(function() {
        cy.fixture('example').then(function(data){
            this.data=data;
            fname=this.data.firstname;
            lname1=this.data.lastname;
            Address2=this.data.Address;
            email1=this.data.email;
            gendernew=this.data.gender;
            hobby=this.data.hobbies;
            language=this.data.languages;
    })
})

      it('demotesting', function() { 
        cy.viewport(1920,1080) 
        cy.wait(2000)   
        jsonpractice.demotestingurl()
       // cy.screenshot('complete')
        jsonpractice.demofirstname(fname)
       // cy.screenshot({ capture: "fullPage" });
        //cy.screenshot('firstname successfully entered')
         jsonpractice.demolastname(lname1)
         jsonpractice.demoaddress(Address2)
         jsonpractice.demoemail(email1)
         jsonpractice.demogender(gendernew)
         jsonpractice.demohobbies(hobby)
         jsonpractice.demolanguages(language)
         //jsonpractice.demoskills()
        // jsonpractice.qaframe()
      })
     /* it('demotesting for frames', function() {
       
        jsonpractice.qaframe()
        
          }) */
          })