class Alerts{
    
alertsurl(){
    cy.visit('https://demoqa.com/alertsWindows')
    cy.wait(3000)
    cy.xpath('//span[text()="Alerts"]').click()

}
clickalertpopupbutton(){
   const clickbutton= cy.xpath('//button[@id="alertButton"]').click()
    cy.on('window:alert',(str) => {
expect(str).to.equal('You clicked a button')
    }
    )
    cy.reload()
}
    clickconfirmpopupbutton(){ 
      cy.xpath('//button[@id="confirmButton"]').click()
       cy.on('window:confirm',(str) => {
        //expect(str).to.equal('Do you confirm action?')  
        assert.equal(str,'Do you confirm action?',"Actual and Expected msgs are equal")
       }
       )
    }
}
export default Alerts