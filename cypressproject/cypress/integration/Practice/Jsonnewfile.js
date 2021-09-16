import Jsonpractice from "../../support/pageobjectmodel/jsonpractice"

const tests = require('../../fixtures/example.json')
    describe('Demoautomationtesting', () => {

    
        const jsonpractice =  new Jsonpractice()
    
         it('Verify the demoautomationtesting page', () => {
           
            cy.visit('http://demo.automationtesting.in/Register.html')
            jsonpractice.demofirstname(tests.email)
         })
        })
   