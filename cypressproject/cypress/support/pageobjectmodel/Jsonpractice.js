class Jsonpractice{

    demotestingurl()
          {    
       cy.visit('http://demo.automationtesting.in/Register.html')
       cy.wait(3000);   
      }
      demofirstname(firstname)
    {

     cy.xpath('//input[@ng-model="FirstName"]').type(firstname)
     // console.log(firstname ," successfully entered into textbox")

    }
    demolastname(lname)
    {
      cy.xpath('//input[@placeholder="Last Name"]').type(lname)
      console.log(lname,"successfully entered into textbox")
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
  }
  demogender(gender)
  {
    cy.xpath('//input[@value="'+gender+'"]').click()
  }
  demohobbies(hobby)
  {
    cy.wait(3000)
    cy.xpath('//input[@value="'+hobby+'"]').click()
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
}
export default Jsonpractice