class fbLogin{
    launchurlnew(){
        cy.visit('https://www.facebook.com/')
        cy.url().should('include','face')
    }
    username_and_pwd(username,password){
        cy.xpath('//*[@id="email"]').should('be.visible').should('be.enabled').type(username)
        cy.xpath('//*[@id="pass"]').should('be.visible').should('be.enabled').type(password)
    }
}
export default fbLogin