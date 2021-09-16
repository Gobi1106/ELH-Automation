import "cypress-xpath"

import Loginpage from '../../../cypress/support/pageobjectmodel/Loginpage.js'
import fbLogin from "./fbLogin.js"
//import Javascript from "./Javascript.js"


/// <reference types = "cypress" />
describe('TestSuite', () => {
  const loginpage = new Loginpage()
  const fblogin = new fbLogin()
 

 // var location = "NCR"
  it('Verify the title of the page', () => { 
    loginpage.launchUrl()
    loginpage.formfirstname("Archana")
    
    loginpage.formlastname("Lingampalli")
    loginpage.formemail("archanal@gmail.com")
    loginpage.formgender()
    loginpage.formmobilenumber("7895412365")
    //loginpage.formsubject('Accounting')
    loginpage.formcheckbox()
   cy.log('Successfully selected the checkbox')
   loginpage.formstatedropdown("Uttar Pradesh")
   loginpage.formcitydropdown("Agra")
   //assert.equal('Archana','Archana','Both are equal')
      })
      it('Verifying the webtable', () => {
        loginpage.launchwebtableurl()
        loginpage.webtableclick("Cierra","Vega","39","cierra@example.com","10000","Insurance")
      }
       
      )
      it('Verifying the alerts', () => {
        loginpage.alertsurl()
        loginpage.clickalertpopupbutton()
        loginpage.clickconfirmpopupbutton()
      }
      )
      it('Verify the username and password', () => {
     fblogin.launchurlnew()
     fblogin.username_and_pwd("archana@gmail.com","Archana@87")
      }
      )
     
      
  })
 
  
   
    
  