
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
   
   // var result,firstname,lastname,address,email,phno,gender,hobbies,selectCountry,year,substryear,month,password,confirmpwd;
   beforeEach(function(){
      cy.viewport(1920,1080)
      // const test= require('../fixtures/arrayData.json')
      // for(let i=0;i<test.Regno.length;i++){
      //    cy.log(test.Regno.length)
      //    cy.log(i)
      // firstname= test.Regno[i].Firstname
      // cy.log(firstname)
      // lastname=test.Regno[i].Lastname
      // address=test.Regno[i].Address
      // email=test.Regno[i].Email
      // phno=test.Regno[i].Phno
      // gender=test.Regno[i].Gender
      // hobbies=test.Regno[i].Hobbies
      // month=test.Regno[i].Month
      // year=test.Regno[i].Year
      // substryear=test.Regno[i].Substryear
      // selectCountry=test.Regno[i].SelectCountry
      // password=test.Regno[i].Password
      // confirmpwd=test.Regno[i].ConfirmPassword
      // }

      // cy.fixture('data').then((res)=>{
      //    this.result=res;
      //    firstname=this.result.Firstname;
      //    lastname=this.result.Lastname;
      //    address=this.result.Address;
      //    email=this.result.Email;   
      //    phno=this.result.Phno;
      //    gender=this.result.Gender;
      //    hobbies=this.result.Hobbies;
      //    month=this.result.Month;
      //    year=this.result.Year;
      //    substryear=this.result.Substryear;
      //    selectCountry=this.result.SelectCountry;
      //    password=this.result.Password;
      //    confirmpwd=this.result.ConfirmPassword;

      // })
   })
   afterEach(function(){
      cy.log("Check by yourself, if it is completed or not")
   })

// beforeEach(function(){
//      cy.fixture('data').then(function(res){
//         this.res=res;
//         firstname=this.res.firstname;
//         lastname=this.res.lastname;
//         address=this.res.Address;
//      })
// })

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
   //address=test.Regno[i].Address
   //email=test.Regno[i].Email
   //phno=test.Regno[i].Phno
   gender=test.Regno[i].Gender
   hobbies1=JSON.stringify(test.Regno[i].Hobbies[0].cricket)
   hobbies2=JSON.stringify(test.Regno[i].Hobbies[0].movies)
   //hobbies3=JSON.stringify(test.Regno[i].Hobbies[0].hockey)
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

   // cy.get("input#datepicker1").
   // click().type(getdate(),{ force: true })
   // function getdate(){

   // var dob;
   // //set a range of years
   // var min = 2018;
   // var max = 2021;
   
   // // Math.ceil prevents the value from being 0;
   // var month = Math.ceil(Math.random() * 12);
   // var day = Math.ceil(Math.random() * 28);
   // var year = Math.floor(Math.random() * (max - min) + min);
   
   // //this ensures that the format will stay mm/dd/yyyy;
   // if(month < 10) {
   //    month = "0" + month;
   // }
   // if(day < 10) {
   //    day = "0" + day;
   // }
   // //concatenates random dob in mm/dd/yyyy format;
   // dob = month + "/" + day + "/" + year;
   
   // return dob;
   // }





  
   // const date = randomDate(new Date(2021, 0, 1), new Date());
   // var str=date.substr(0,15)
   // var res=str.substring(4)
   // cy.log(res)
   // var hob1=res.replace(/\s+/g, "/");

   // function randomDate(start, end) {
   //    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
   //    }
   //    cy.get("input#datepicker1").
   //    click().type(hob1)
   //    cy.log(hob1);
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
           //test.logOutPut("split ==" + split)
         //   if (split.includes("")) {
         //   dateToSelect = dateToSelect.toString().replace(split, split.charAt(1) + ",");
         //   cy.log(dateToSelect)
         //   }
   // register.randomDate()
   // cy.reload()
   // register.randomDate()
})

 })