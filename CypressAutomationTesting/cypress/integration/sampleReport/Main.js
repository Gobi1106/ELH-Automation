
import register from '../../support/POM/register'
/// <reference types="Cypress" />

import "cypress-xpath"
import iframe from '../../support/POM/iframe';
describe('Test Suite', () => {
   beforeEach(function () {
      cy.viewport(1920, 1080)
      Cypress.Screenshot.defaults({
         capture: 'runner',
      })
   })

   it('Register page', function () {
      var result, firstname, lastname, address, email, phno, gender, hobbies1, hobbies2, hobbies3, selectCountry, year, substryear, month, password, confirmpwd;

      const test = require('../../fixtures/arrayData.json')
      for (var i = 0; i < test.Regno.length; i++) {
         cy.log(test.Regno.length)
         cy.log(i)
         firstname = test.Regno[i].Firstname
         cy.log(firstname)
         lastname = test.Regno[i].Lastname
         gender = test.Regno[i].Gender
         hobbies1 = JSON.stringify(test.Regno[i].Hobbies[0].cricket)
         hobbies2 = JSON.stringify(test.Regno[i].Hobbies[0].movies)
         cy.log(hobbies1)
         cy.log(hobbies2)

         month = test.Regno[i].Month
         year = test.Regno[i].Year
         substryear = test.Regno[i].Substryear
         selectCountry = test.Regno[i].SelectCountry
         password = test.Regno[i].Password
         confirmpwd = test.Regno[i].ConfirmPassword

         cy.visit("http://demo.automationtesting.in/Register.html")
         register.typefirstname(firstname)
         register.typelastname(lastname)
         register.typeaddress()
         register.typeemail()
         register.typephno()
         register.typegender(gender)
         register.typehobbies(hobbies1, hobbies2)
         register.typeselectCountry(selectCountry)
         register.typeyear(year, substryear)
         register.typemonth(month)
         register.typeday()
         register.typepassword(password)
         register.typeConfirmPassword(confirmpwd)

      }

   })

   it('iframe', function () {
      cy.visit('http://demo.automationtesting.in/Frames.html')
      iframe.singleframe()

   })

   it('date', function () {
      cy.visit("http://demo.automationtesting.in/Datepicker.html")

      const moment = require('moment')
      var date = new Date();
      var last = new Date(+(new Date()) + Math.floor(Math.random() * 100000000000));
      cy.log("last" + last)
      var month = last.getMonth() + 1
      cy.log(month)
      var lastNew = last.getDate() + " " + month + " " + last.getFullYear()
      cy.log(lastNew)
      let dateToSelect = moment(lastNew, "DD MM YYYY").format("MM/DD/YYYY")
      cy.log(dateToSelect)
      cy.get("input#datepicker1").
         click().type(dateToSelect, { force: true })
   })

})