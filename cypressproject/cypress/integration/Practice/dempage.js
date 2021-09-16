import "cypress-xpath"

import Javascript from "../../support/pageobjectmodel/Javascript"

/// <reference types = "cypress" />
describe('TestSuite', () => {

   const javascript =  new Javascript()

    it('Verify the demopage from globalsite', () => {
       
       javascript.demositeurl()
        javascript.regfirstname("Archana")
        javascript.reglastname("lingampalli")
        javascript.regaddress("Anantapur","AP")
       // javascript.sam"1-3")//
       
       javascript.skillsdropdown("Client Server")
       
       javascript.dateofbirth_yeardropdown("2006")
       javascript.dateofbirth_monthdropdown("June")
       javascript.dateofbirth_daydropdown("8")
       javascript.languages("English")
      }
      )
}
)