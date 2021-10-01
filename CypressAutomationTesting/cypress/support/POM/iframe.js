class iframe {
    singleframe() {

        cy.get('#singleframe').then(function (res) {
            const sframe = res.contents().find('body')
            cy.wrap(sframe)
                .xpath("(//input[@type='text'])[1]")
                .click().
                type('srini')
            cy.visit("http://demo.automationtesting.in/Register.html")
            cy.go('back')
        })
    }
}
module.exports = new iframe()