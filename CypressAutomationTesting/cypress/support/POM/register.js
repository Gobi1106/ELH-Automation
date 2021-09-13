 class register{

    elements={
          fname:()=>cy.get('[ng-model="FirstName"]'),
          lname:()=>cy.get('[ng-model="LastName"]'),
          address:()=>cy.get('[ng-model="Adress"]'),
          email:()=>cy.get('[type="email"]'),
          phno:()=>cy.xpath('//input[@type="tel"]')
    }


       typefirstname(namefirst){
           
           //Clearing cookies
           cy.clearCookies();
           //Check cookie is empty
           cy.getCookies().should('be.empty')
           cy.log("---------")
           cy.reload()
           this.elements.fname().type(namefirst)
           const map= new Map([ ["firstname","srini"]]);
           cy.log(map.values("srini"))
           for(let [key,value] of map){
            cy.log(key+" "+value)
           }     
       }

       typelastname(namelast){
                  this.elements.lname().type(namelast)
       }

       typeaddress(adr){
        this.elements.address().type(adr).should('have.value','Durga nagar,Tambaram')
       }

       typeemail(email){
          this.elements.email().type(email).as('emailid')
          cy.log(this.emailid)
       }

       typephno(phno){
           this.elements.phno().type(phno)
       }

       typegender(gender){
           cy.get('[value="'+gender+'"]').click()
           
       }
       typehobbies(hobbies){
           cy.get('[value="'+hobbies+'"]').should('not.be.checked').click()
       }
       typeselectCountry(SelectCountry){
           cy.get('#country[tabindex="-1"]>option').invoke('text').then((selcountry)=>{
               cy.log(selcountry)
           })
       }
       
       typeyear(year,substryear){
           cy.get('#yearbox>option').invoke('text').then(function(yr){
            let newStr = yr.substring(substryear)
               let arryr=newStr.match(/.{1,4}/g)
               let res= arryr.find(arrelement=> arrelement==(year))
               cy.log(res)
               cy.get('#yearbox').select(res)
           })
       }

       typemonth(month){
        cy.get("[placeholder='Month']>option").invoke('text').then((mon)=>{
                let arrmonth=mon.match(/[A-Z][a-z]+/g)
                cy.log(arrmonth.shift()) 
                let res= arrmonth.find(arrelement=> arrelement==(month))
                cy.get("[placeholder='Month']").select(res)
            //   arrmonth.forEach((element,index,arr) => {
            //       cy.log(element)
            //   });
            //   cy.log("------")
            //   var arrsort=arrmonth.sort()
            //   for(let res of arrsort)
            //   arrsort.forEach((element1,index,arr) => {
            //     cy.log(element1)
            // })
        })
       }
       typeday(){
        cy.get("#daybox>option").invoke('text').then((day)=>{
            let a = day.substring(4);
            let newStr=a.trim();
            cy.log(newStr)
            let str=newStr.split('');
            cy.log(str)
            str.forEach((element,index,arr) => {
                      cy.log(element)
                  });

        //     let newStr = day.substring(4);
        //     cy.log(newStr)
        //     var output = [],
        //     sNumber = newStr.toString();

        //    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        //         output.push(+sNumber.charAt(i));
        //    }
            
        })
       }

       typepassword(password){
           cy.get('#firstpassword').type(password)
          
       }

       typeConfirmPassword(confirmpwd){
           cy.xpath('//input[starts-with(@id,"secondpass")]').type(confirmpwd)
       }

}
module.exports= new register();