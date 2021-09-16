


class Javascript{ 
    demositeurl()
          {    
       cy.visit('http://demo.automationtesting.in/Register.html')
       cy.wait(3000);   
      }

    regfirstname(firstname)
    {
     /* cy.xpath('//input[@type="file"]').click()
      s ="C:\\Users\\LARCHANA\\Documents\\Book1 (Autosaved).xlsx"*/
      cy.xpath('//input[@placeholder="First Name"]').type(firstname)
      console.log(firstname ," successfully entered into textbox")

      const map=new Map()
      map.set(firstname,"firstname in register form")
      console.log(map.has(firstname));
      let obj={firstname}
      map.set(obj,true)
     console.log(map);
    }
    reglastname(lname)
    {
      cy.xpath('//input[@placeholder="Last Name"]').type(lname)
      console.log(lname,"successfully entered into textbox")
     
      const myset = new Set(["lingampalli"])
      console.log(myset.has("lingampalli"));
//for mapping
      const names = new Map();
 console.log(names.set(firstname,lname));
  }
  
  regaddress(address,address1)
  {
    const adress=  cy.xpath('//textarea[@ng-model="Adress"]')
    adress.type(address)
    adress.type(address1)
    const totaladdres = address.concat(address1)
     console.log("address"+ totaladdres)
     const pin ="515701";
     const addressnew = new Set();
     addressnew.add(pin);
    
   // cy.xpath('//select[@id="g2599-experienceinyears"]').select(dropdown)
  //  .should('have.value,dropdown')
  }
  
  dateofbirth_yeardropdown(year)
  {
   const yeardrpdown= cy.xpath('//select[@ng-model="yearbox"]').select(year)
   
  }
  dateofbirth_monthdropdown(value)
  {
    cy.wait(3000)
    cy.xpath('//*[@ng-model="monthbox"]/option').invoke('text').then((month) =>{
      cy.log(month)
  
      let arr=month.match(/[A-Z][a-z]+/g)
     // const mySet=new set(myArray);
      cy.log(arr.shift())
      cy.log(arr)
      arr.forEach((element,index,myArray)=>{
         cy.log(element);
        //cheking value using set
       /* const map=new Map(arr)
     console.log(map.size())*/
      });
      
    }
    )
    const month= cy.xpath('//select[@ng-model="monthbox"]').select(value)
               //month.should('have.value,value')
             
       // console.log(myset.size);
       
  }
   dateofbirth_daydropdown(day) 
   {
     cy.xpath('//select[@ng-model="daybox"]').select(day)
   }
   skillsdropdown(skill)
   {
const skills=cy.xpath('//*[@ng-model="Skill"]/option').invoke('text')
let arr1=skills.text;
cy.log(arr1)
/*arr1.forEach((element1,index,array) =>{
  cy.log(element1)
});*/
cy.xpath('//*[@ng-model="Skill"]').select(skill)
}
languages(language){
  
  cy.xpath('//*[@id="msdd"]').click()
  cy.xpath('//a[@class="ui-corner-all"]').contains(language).click()
const lang= cy.xpath('//a[@class="ui-corner-all"]')
let lang=


function myfunction(languages){
 // alllang.push(languages)
  console.log(lang);
}

}


   }
    
    

    export default Javascript