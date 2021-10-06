import "cypress-xpath"
import 'cypress-file-upload';
import MainData from "./Maindata"


describe('Webtable demopage', () => {
    var firstname1,lastname1,email1,gender,mobile1,dob1,hobbies1,hobbies2,uploadfile,address,state
        
   const maindata = new MainData()

         it('jsonfile data',()  =>{
         
         const fixture = require('../../fixtures/MultipleData.json')
           for(let i=0;i<fixture.Fieldsdata.length; i++){
          cy.log("Arraylist :" + fixture.Fieldsdata.length)
            var Arraylist = fixture.Fieldsdata[i];

          firstname1 = Arraylist.Firstname;
          lastname1= Arraylist.Lastname;
          email1= Arraylist.Email;
          gender=Arraylist.Gender;
          mobile1=Arraylist.MobileNumber;
          dob1=Arraylist.Dateofbirth;
          hobbies1=JSON.stringify(Arraylist.Hobbies[0].hobby1)
          cy.log(hobbies1)
          hobbies2=JSON.stringify(Arraylist.Hobbies[0].hobby2)
          uploadfile=Arraylist.filepath;
          address=Arraylist.address;
          state=Arraylist.State;
           }       
           })
        
           it('Comparing js files data with jsonfile',()  =>{
          
            maindata.demoqaurl()
             
            maindata.demofirstname(firstname1)
            maindata.demolastname(lastname1)
            maindata.demoemail(email1)
            maindata.demogender(gender)
            maindata.demomobilenumber()
           // maindata.demodob(dob1)
            maindata.demohobbies(hobbies1,hobbies2)
            cy.log(hobbies1)
            //maindata.demohobbies(hobbies2)
            
            // cy.log(hobby)
           // 
           maindata.uploadfile(uploadfile)
           maindata.address(address)
           maindata.statedropdown(state)
          
          })
           it.only('Checking data for datepicker',()  =>{
            maindata.datepicker()
           

           })
           it('Screenshots',()  =>{
            cy.screenshot()
           })
        })