import "cypress-xpath"
import Jsonpractice from "../../support/pageobjectmodel/jsonpractice"

import WebTable from "./WebTable"

/// <reference types = "cypress" />

describe('automation testing demo', () => {
var fname,lname1,Address2,email1,gendernew,hobby,language,
qafname
  const jsonpractice = new Jsonpractice()
  
 // const webtable = new WebTable()
   
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

        /*it('demotesing', function()
         {
           
         jsonpractice.demotestingurl()
        jsonpractice.demofirstname(fname)
         jsonpractice.demolastname(lname1)
         jsonpractice.demoaddress(Address2)
         jsonpractice.demoemail(email1)
         jsonpractice.demogender(gendernew)
         jsonpractice.demohobbies(hobby)
         jsonpractice.demolanguages(language)
         jsonpractice.demoskills()
           })*/
          /* it('checking webtable', function()
           {
           webtable.webtableurl()
           
           }) */
        
            
          })