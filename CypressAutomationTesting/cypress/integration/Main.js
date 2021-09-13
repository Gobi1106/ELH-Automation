
import register from '../support/POM/register'
import data from '../fixtures/data.json'

/// <reference types="Cypress" />

//const test= require('../fixtures/jsondata/data.json')
import "cypress-xpath"
import iframe from '../support/POM/iframe';
describe('Test Suite', ()=>{
   
   var result,firstname,lastname,address,email,phno,gender,hobbies,SelectCountry,year,substryear,month,password,confirmpwd;
   beforeEach(function(){
      cy.viewport(1920,1080)
      cy.fixture('data').then((res)=>{
         this.result=res;
         firstname=this.result.Firstname;
         lastname=this.result.Lastname;
         address=this.result.Address;
         email=this.result.Email;
         phno=this.result.Phno;
         gender=this.result.Gender;
         hobbies=this.result.Hobbies;
         month=this.result.Month;
         year=this.result.Year;
         substryear=this.result.Substryear;
         SelectCountry=this.result.SelectCountry;
         password=this.result.Password;
         confirmpwd=this.result.ConfirmPassword;



      })
   })
   afterEach(function(){
      cy.log("Executed")
   })


 it('Register page',function(){
    cy.visit("http://demo.automationtesting.in/Register.html")
    register.typefirstname(firstname)
    register.typelastname(lastname)
    register.typeaddress(address)
    register.typeemail(email)
    register.typephno(phno)
    register.typegender(gender)
    register.typehobbies(hobbies)
    register.typeselectCountry(SelectCountry)
    register.typeyear(year,substryear)
    register.typemonth(month)
    register.typeday()
    register.typepassword(password)
    register.typeConfirmPassword(confirmpwd)


 })

it('iframe',function(){
   cy.visit('http://demo.automationtesting.in/Frames.html')
   cy.request('/Frames.html')
   iframe.singleframe()

})

 })