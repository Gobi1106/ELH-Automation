
class MainData{
    demoqaurl()
        {
        cy.visit('https://demoqa.com/automation-practice-form')
       
        }
        demofirstname(firstname)
        {
            cy.xpath('//input[@id="firstName"]').type(firstname)
            expect(firstname).to.equal('sruthi')
        }
        demolastname(lastname)
        {
            let name = cy.xpath('//input[@id="lastName"]').type(lastname)
           // let newname = name.replace(lastname,'L')
            //cy.log(newname)
        }
        demoemail(email)
        {
           const mail= cy.xpath('//input[@id="userEmail"]').type(email)
          // mail.type(email())
            /*function email(){
            var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var charactersLength = characters.length;
          for ( var i = 0; i < charactersLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
               }
              // cy.log(charactersLength);
            return result;
           // cy.log(result);
            }*/
        }
        demogender(gender)
        {
            cy.xpath('//label[text()="'+gender+'"]').click()
            
            cy.xpath('//input[@name="gender"]/following-sibling::label')
            .each(function(gender1,index,Listofelements){
                cy.log(gender1.text());
        })
    }

        demomobilenumber()
        {
            const mobilenum = cy.xpath('//*[@id="userNumber"]')
            mobilenum.type(Phone())
            function Phone(){
            var result = '';
         // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var characters = '0123456789'; 
         var charactersLength = characters.length;
          for ( var i = 0; i < charactersLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
               }
              // cy.log(charactersLength);
            return result;
           // cy.log(result);
            }
        }
       demodob(dateofbirth)
        {
           // let dob = dateofbirth
        const dob1 = cy.xpath('//input[@id="dateOfBirthInput"]')
           //let result= dob.replace(dob1,dateofbirth)
          // cy.log(result)
           // cy.wait(2000)
           dob1.clear()
           dob1.type(dateofbirth)
        }
demohobbies(hobbies1,hobbies2)
{
    
  var  h1=hobbies1.replace(/"+/g, "");
  var  h2=hobbies2.replace(/"+/g,"");

    cy.xpath('//*[text()="'+h1+'"]').click()
    cy.xpath('//*[text()="'+h2+'"]').click() 
   

 //const hobbies= cy.xpath(".custom-control custom-checkbox custom-control-inline")

//const h = cy.log(hobby1)
 //cy.xpath('//input[@type="checkbox"]/..//parent::label[.="'+h+'"]').click()
 
 //cy.xpath('//input[@type="checkbox"]/..//parent::label[.="'+hobby1+'"]').click()  

}

uploadfile(pathofthefile)
{
 const filepath = pathofthefile;
    cy.get('input[type="file"]').attachFile(filepath)
    cy.get("#uploadPicture").click()
    //cy.get(".form-control-file").contains('Picture1.png')
}
address(Address)
{
    let a = "Andhrapradesh"
    const adress = cy.xpath('//textarea[@id="currentAddress"]')
    adress.type(Address)
    //adress.replace(/Address/g, a)
}
statedropdown(state)
{  
 cy.xpath('(//div[@aria-hidden="true"])[1]').click()
 cy.wait(3000)
// cy.xpath('//div[@id="state"]').invoke('text').then((dropdownstate)=>{
    cy.xpath('//div[@id="state"]').click()
    cy.get('#state').type('NCR{enter}')
}
    //cy.xpath('//*[@class="ui-corner-all"]').invoke('text').then((languagedata)=>{
       // let array=dropdownstate.read("\n");
       //array.;

     // let dropdown= array.toString();  //converting array to string

    // let arr =  dropdown.split(",","");
     
       // array.forEach((element,index,myArray)=>{
//cy.log(element);
        
       
 //cy.xpath('//div[@id="state"]').type(state)
// cy.xpath('//*[@class="ui-corner-all"]').invoke('text').then((languagedata)=>{
  
  // cy.log(array)
   //array.forEach((element,index,myArray)=>{
   
citydropdown(city)
{
   cy.xpath('(//div[@aria-hidden="true"])[2]').click()
  // cy.wait(3000)
   cy.get('#city').type(city,'{enter}')
   
}
datepicker()
{
cy.visit('https://demoqa.com/date-picker')
cy.wait(3000)
const date1 = cy.xpath('//input[@id="datePickerMonthYearInput"]').click();
date1.clear();
//date1.type(getdate(),{ force: true })
   //function getdate(){

    const moment = require('moment');
    var date = new Date();
    var last = new Date(+(new Date()) - Math.floor(Math.random() * 1000000000000));
    var month = last.getMonth() + 1
    var lastNew = last.getDate() + "/" + month + "/" + last.getFullYear()
    let dateToSelect = moment(lastNew, "DD MM YYYY").format("MM/DD/YYYY")
    let split = dateToSelect.concat("09876")
    console.log(split);
    console.log("split ==" + split)
    
if (split.includes("0")) {
dateToSelect = dateToSelect.toString().replace(split, split.charAt(2) + ",");
console.log(dateToSelect)
}
console.log(dateToSelect)
         
    }
}    
    export default MainData
/*var dob;
//set a range of years
var min = 1900;
var max = 2021;

// Math.ceil prevents the value from being 0;
var month = Math.ceil(Math.random() * 12);
var day = Math.ceil(Math.random() * 30);
var year = Math.floor(Math.random() * (max - min) + min);

//this ensures that the format will stay mm/dd/yyyy;
if(month < 10) {
	month = "0" + month;
}
if(day < 10) {
	day = "0" + day;
}
//concatenates random dob in dd/mm/yyyy format;
dob = month + "/" + day + "/" + year;

return dob;*/
   

  /* // cy.xpath('//input[@class="react-datepicker-ignore-onclickoutside"]').
   date1.click().type(getdate(),{ force: true })
    function getdate(){
     var someDate = new Date();
     var numberOfDaysToAdd = 5;
     for(var i=1;i<numberOfDaysToAdd;i++){
     someDate.setDate(someDate.getDate() + i);
     var dd = someDate.getDate();
     var mm = someDate.getMonth()+1; //January is 0!
     var yyyy = someDate.getFullYear();
     
     if(dd<10) {
     dd = '0'+dd
     }
     
     if(mm<10) {
     mm = '0'+mm
     }
     var today = mm + '/' + dd + '/' + yyyy;
     return today
     cy.log(today); 
 }
     }*/
//var test = '';
/*const moment = require('moment');
var date = new Date();
var last = new Date(date.getTime() + (2 * 24 * 60 * 60 * 1000));
var month = last.getMonth() + 1
var lastNew = last.getDate() + "/" + month + "/" + last.getFullYear()
let dateToSelect = moment(lastNew, 'MMMM D, YYYY').format('YYYY-M-D')
let split = dateToSelect.split(" ")[1]
test.logOutPut("split ==" + split)
if (split.includes("0")) {
dateToSelect = dateToSelect.toString().replace(split, split.charAt(1) + ",");
cy.log(dateToSelect)
 }*/



/*var now = new Date();
        randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime();
        window.onload = function () {
         
}*/


