class Jsonpractice{

    demotestingurl()
      {
       cy.wait(3000);      
       cy.visit('http://demo.automationtesting.in/Register.html')
       cy.wait(3000);   
      }

      demofirstname(firstname)
    {
   const fname = cy.xpath('//input[@placeholder="First Name"]')
   fname.type(firstname)
     // console.log(firstname ," successfully entered into textbox")
     expect(firstname).to.equal("Archana Lingampalli")
     cy.screenshot('firstname successfully entered')
    }
    demolastname(lname)
    {
      cy.xpath('//input[@placeholder="Last Name"]').type(lname)
      console.log(lname,"successfully entered into textbox")
      cy.screenshot('lastname successfully entered')
  }
  demoaddress(address,address1)
  {
    const adress=  cy.xpath('//textarea[@ng-model="Adress"]')
    adress.type(address,address1)
   // adress.type(address1)
   // const totaladdres = address.concat(address1)
     console.log(adress + "address")
  }
  demoemail(email1)
  {
    cy.xpath('//input[@type="email"]').type(email1)
    expect(email1).to.equal("archanalingampally@gmail.com")
    cy.screenshot('Email successfully entered')
  }
  demogender(gender)
  {
    cy.xpath('//input[@value="'+gender+'"]').click()
    expect(gender).to.have.length(5)
   cy.screenshot('gender count is equal')
   
  }
  demohobbies(hobby)
  {
    cy.wait(3000)
    cy.xpath('//input[@value="'+hobby+'"]').click()
cy.screenshot('hobby selected')
  }
  demolanguages(lang)
  {
   cy.xpath('//div[@id="msdd"]').click()
    cy.xpath('//*[@class="ui-corner-all"]').invoke('text').then((languagedata)=>{
   let array=languagedata.match(/[A-Z][a-z]+/g)
  // cy.log(array)
   array.forEach((element,index,myArray)=>{
    cy.log(element);
   })
   })
    cy.screenshot('All languages get printed')
}
demoskills()
{
  cy.xpath('//select[@ng-model="daybox"]').click({force:true})
 const skill=  cy.xpath('//select[@ng-model="Skill"]/option').invoke('text').then((skills)=>{
skill.should('have.length',41)
.each(function(item,index){
 let array1=skill
//array1.forEach((element1,index,myArray)=>{
 // cy.log(element1);
 
    array1.forEach((element1,index,myArray)=>{
      cy.log(element1);
    })
})
 })
}
qaframe()
{
  cy.visit('http://demo.automationtesting.in/Frames.html')
  cy.wait(3000)
  cy.request('/Frames.html')
const frame = cy.iframe("#singleframe").xpath('//input[@type="text"]')
 frame.type('frame')
}
}

export default Jsonpractice