class MainData{
    demoqaurl(){
        cy.visit('https://demoqa.com/automation-practice-form')
       
        }
        demofirstname(firstname)
        {
            cy.xpath('//input[@id="firstName"]').type(firstname)
        }
        demolastname(lastname)
        {
            cy.xpath('//input[@id="lastName"]').type(lastname)
        }
        demoemail(email)
        {
            cy.xpath('//input[@id="userEmail"]').type(email)
        }
        demogender(gender)
        {
            cy.xpath('//label[text()="'+gender+'"]').click()
            
        }
        demomobilenumber(mobilenumber)
        {
            const mobilenum = cy.xpath('//*[@id="userNumber"]')
            mobilenum.type(mobilenumber)
        }
        demodob(dateofbirth)
        {
            const dob = cy.xpath('//input[@id="dateOfBirthInput"]')
            dob.replace(dob,dateofbirth)
           // cy.wait(2000)
          //  dob.type(dateofbirth)
        }

}
export default MainData