import "cypress-xpath"
import MainData from "./Maindata"


describe('Webtable demopage', () => {
    var firstname1,lastname1,email1,gender,mobile1,dob1
        
   const maindata = new MainData()


         it('Comparing the data with json file',()  =>{
         
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
           }       
           })
        
           it('Comparing the data with js files',()  =>{
            maindata.demoqaurl() 
            maindata.demofirstname(firstname1)
            maindata.demolastname(lastname1)
            maindata.demoemail(email1)
            maindata.demogender(gender)
            maindata.demomobilenumber(mobile1)
            maindata.demodob(dob1)
            
           })
        })