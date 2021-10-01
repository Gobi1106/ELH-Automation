import "cypress-xpath"
///<reference types='Cypress'/>
describe('Intercept Method', () => {
    it('Intercept', () => {
        cy.visit('https://www.metaweather.com/api/')
        cy.intercept({
            path: '/location/search/?query=london'
        }).as('post')
        cy.xpath('//a[contains(text(),"/?query=london")]').click()
        cy.wait('@post').then(res => {
            cy.log(JSON.stringify(res))
            expect(res.body.data[0].woeid).eq('44418')
        })
    })

    it.only('Intercept using fixture', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', { fixture: 'apiJsonData.json' }).as('post')
        cy.get('table:nth-of-type(1) td>a[href="/posts"]').click()
        cy.wait('@post').then(res => {
            cy.log(JSON.stringify(res))
            console.log(JSON.stringify(res))
        })
    })

})