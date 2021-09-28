
import register from '../support/POM/register'
import readExcelMain from '../integration/readExcelMain'
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

    cy.visit("http://demo.automationtesting.in/Register.html")
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

it('date',function(){
   cy.visit("http://demo.automationtesting.in/Datepicker.html")

   cy.get("input#datepicker1").
   click().type(getdate(),{ force: true })
   function getdate(){

   var dob;
   //set a range of years
   var min = 2018;
   var max = 2021;
   
   // Math.ceil prevents the value from being 0;
   var month = Math.ceil(Math.random() * 12);
   var day = Math.ceil(Math.random() * 28);
   var year = Math.floor(Math.random() * (max - min) + min);
   
   //this ensures that the format will stay mm/dd/yyyy;
   if(month < 10) {
      month = "0" + month;
   }
   if(day < 10) {
      day = "0" + day;
   }
   //concatenates random dob in mm/dd/yyyy format;
   dob = month + "/" + day + "/" + year;
   
   return dob;
   }
})

 })