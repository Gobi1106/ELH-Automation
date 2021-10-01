///<reference types='Cypress'/>
describe('Weather Api Test', () => {
    it.only('Api Testing Iterate Array value', () => {
        var loc = ""
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=in",
        }).then((resid) => {
            loc = resid.body
            return loc;
        }).then((res) => {
            cy.log("Array Length=" + loc.length)
            for (let i = 0; i < loc.length; i++) {
                cy.request({
                    method: "GET",
                    url: "https://www.metaweather.com/api/location/search/?query=" + loc[i].title
                }).then((resp) => {
                    expect(resp.status).to.eq(200)
                    expect(resp.body[0].title).to.eq(loc[i].title)
                    expect(resp.body[0]).has.property('title', loc[i].title)
                })
            }
        })

    })
    it('Api Testing Title return and check', () => {
        var title = ""
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=in",
        }).then((resid) => {
            title = resid.body[0].title
            return title
        }).then((res) => {
            cy.request({
                method: "GET",
                url: "https://www.metaweather.com/api/location/search/?query=" + title
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body[0].title).to.eq(title)
                expect(resp.body[0]).has.property('title', title)
            })
        })
    })
})