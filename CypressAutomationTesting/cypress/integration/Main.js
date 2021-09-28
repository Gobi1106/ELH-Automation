
import register from '../support/POM/register'
import readExcelMain from '../integration/readExcelMain'
import data from '../fixtures/data.json'
import moment from'../fixtures/date.json'
import moment from'../fixtures/Excel/'
/// <reference types="Cypress" />

//const test= require('../fixtures/jsondata/data.json')
import "cypress-xpath"
import iframe from '../support/POM/iframe';
describe('Test Suite', ()=>{
   
   beforeEach(function(){
      cy.viewport(1920,1080)
   })
   afterEach(function(){
      cy.log("Check by yourself, if it is completed or not")
   })

 it('Register page',function(){
   //cy.viewport(1920,1080)
   var result,firstname,lastname,address,email,phno,gender,hobbies1,hobbies2,hobbies3,selectCountry,year,substryear,month,password,confirmpwd;

   const test= require('../fixtures/arrayData.json')
   for(var i=0;i<test.Regno.length;i++){
      cy.log(test.Regno.length)
      cy.log(i)
   firstname= test.Regno[i].Firstname
   cy.log(firstname)
   lastname=test.Regno[i].Lastname
   gender=test.Regno[i].Gender
   hobbies1=JSON.stringify(test.Regno[i].Hobbies[0].cricket)
   hobbies2=JSON.stringify(test.Regno[i].Hobbies[0].movies)
   cy.log(hobbies1)
   cy.log(hobbies2)

   
   month=test.Regno[i].Month
   year=test.Regno[i].Year
   substryear=test.Regno[i].Substryear
   selectCountry=test.Regno[i].SelectCountry
   password=test.Regno[i].Password
   confirmpwd=test.Regno[i].ConfirmPassword

    cy.visit("")
    register.typefirstname(firstname)
    register.typelastname(lastname)
    register.typeaddress()
    register.typeemail()
    register.typephno()
    register.typegender(gender)
    register.typehobbies(hobbies1,hobbies2)
    register.typeselectCountry(selectCountry)
    register.typeyear(year,substryear)
    register.typemonth(month)
    register.typeday()
    register.typepassword(password)
    register.typeConfirmPassword(confirmpwd)

   }
    
 })

it('iframe',function(){
   cy.visit('http://demo.automationtesting.in/Frames.html')
   cy.request('/Frames.html')
   iframe.singleframe()

})

it.only('jsondata',function(){
   const datares=readExcelMain.generateJsonFromExcel()
   console.log(datares)
   cy.log(datares)


})

it('date',function(){
   cy.visit("http://demo.automationtesting.in/Datepicker.html")

        const moment= require('moment')
         //const moment = require('..//fixtures/date.json');
           var date = new Date();
           var last = new Date(date.getTime() + (2 * 24 * 60 * 60 * 1000));
           cy.log("last"+last)
           var month = last.getMonth() + 1
           cy.log(month)
           var lastNew = last.getDate() + " " + month + " " + last.getFullYear()
           cy.log(lastNew)
           let dateToSelect = moment(lastNew, "DD MM YYYY").format("MM/DD/YYYY")
           cy.log(dateToSelect)
           cy.get("input#datepicker1").
           click().type(dateToSelect,{force: true})
})

 })