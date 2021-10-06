class Loginpage{
launchUrl(){
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq', 'ToolsQA')
}
//firstname
   formfirstname(value)
  
{
 const firstname=cy.xpath('//*[@id="firstName"]')
 firstname.type(value)
 console.log(value.concat("Arch"));

}
//lastname
formlastname(value){
    const lastname =  cy.xpath('//*[@id="lastName"]')
    lastname.type(value)  
}
//email
formemail(value){
const email=cy.get("#userEmail")
email.type(value)
}

//gender
formgender(){
    cy.xpath('//input[@type="radio"]').should('have.length',3)
    const gender= cy.contains('Female').and('include.text','Female')
    gender.click()
    cy.xpath('//label[@for="gender-radio-2"]').invoke('text').then((radiobuttton)=>{
   
 assert.equal(radiobuttton,'Female' , "Radiobutton actual and expected values matched")
 }
 )
}

//mobile number
formmobilenumber(value){
    const mobilenum = cy.xpath('//*[@id="userNumber"]')
    mobilenum.type(value)
    console.log(typeof(Number.parseInt("mobile number: " + value)));
  /*cy.xpath('(//input[@class=" mr-sm-2 form-control"])[3]').invoke('int').then((number)=>{
    assert.equal(number,'7895412332', "Both numbers are  equal")
   }
   )*/
}
/*formsubject(value){
  const subject=  cy.xpath('//div[@id="subjectsContainer"]').click()
  subject.type('Accounting{enter}')
  //subject.type('{enter}')
//formdate(){
  //  cy.xpath('//input[@id="dateOfBirthInput"]').click()
    
}*/
formcheckbox(){
   const checkbox= cy.xpath('//label[@for="hobbies-checkbox-2"]')
   checkbox.click()
   cy.xpath('//label[.="Reading"]').invoke('text').then((selectcbox)=>{
    expect(selectcbox).to.equal('Reading')
   }
   )
   //and('have.value',"Reading")
}
formstatedropdown(value){
    cy.log("value selected" + value)
    
 cy.xpath('(//div[@aria-hidden="true"])[1]').click()
 cy.wait(3000)
 cy.xpath('//div[@id="state"]').type(value)
 cy.get('#state').type('{enter}')
 
 if(value == "Uttar Pradesh"){
     console.log("dropdown value selected")
 }
 else{
     console.log("value not selected")
 }
cy.xpath('(//div[text()="Uttar Pradesh"])[1]').invoke('text').then((dropdown1)=>{
    assert.equal(dropdown1,'Uttar Pradesh', "State Dropdown value matched")
}

)
}
formcitydropdown(value)
{
   cy.xpath('(//div[@aria-hidden="true"])[2]').click()
  // cy.wait(3000)
   cy.get('#city').type('Agra{enter}')
   cy.xpath('(//div[@class=" css-1uccc91-singleValue"])[2]').invoke('text').then((dropdown2)=>{
    assert.equal(dropdown2,'Agra', "City Dropdown value matched")
}
   )

}

launchwebtableurl(){
cy.visit("https://demoqa.com/webtables")

}
webtableclick(value,value1,value2,value3,value4,value5){

    cy.xpath('//*[text()="'+value+'"]').invoke('text').then((fname)=>{
        assert.equal(fname,'Cierra',"Firstname actual and expected are equal")
    cy.xpath('//*[text()="'+value1+'"]').invoke('text').then((lname)=>{
        expect(lname).to.equal(value1)
    cy.xpath('//*[text()="'+value2+'"]').invoke('text').then((age)=>{
        //expect(age).to.equal(value2)
        assert.equal(age,value2,"Age actual and expected are equal")
       // assert.isNumber(value2,"Value is Number")
    cy.xpath('//*[text()="'+value3+'"]').invoke('text').then((gmail)=>{
              expect(gmail).to.equal(value3)  
    cy.xpath('//*[text()="'+value4+'"]').invoke('text').then((salary)=>{
              assert.equal(salary,value4,"salary actual and expected are equal")
    cy.xpath('//*[text()="'+value5+'"]').invoke('text').then((Dept)=>{
              assert.equal(Dept,value5,"Department actual and expected are equal")
        }
        )  
        }
        )  
        }
        )   
        }
        )
   
    cy.xpath('//*[@class="rt-tr-group"]//*[text()="'+value+'"]//../..//*[@title="Edit"]').click()
    cy.xpath('//span[@aria-hidden="true"]').click()
}
        )
    }
    )
}



}
export default Loginpage