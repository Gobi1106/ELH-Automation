///<reference types='Cypress'/>
const dataJson = require('../../fixtures/apiJsonData.json')

describe('Api Testing', () => {
    it('Post Api Test', function () {
        var TokenId = "Bearer a8d9247cd6d06b9d6b23fb45af9ce00bab60b26f9db2e79213a507f1fec0b653"
        var emailval = "";
        var Email = "";
        var userID = ""
        var emailChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012"
        for (var i = 0; i < 6; i++)
            emailval += emailChar.charAt(Math.ceil(Math.random() * emailChar.length))
        Email = emailval + "@gmail.com"
        //cy.fixture('jsonData').then((data)=>{})
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users/",
            headers: {
                'Authorization': "Bearer a8d9247cd6d06b9d6b23fb45af9ce00bab60b26f9db2e79213a507f1fec0b653"
            },
            body: {
                "name": dataJson.name,
                "email": Email,
                "gender": dataJson.gender,
                "status": dataJson.status
            }
        }).then(function (res) {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("email", Email)
            expect(res.body.data).has.property("gender", dataJson.gender)
        }).then((getData) => {
            userID = getData.body.data.id
            cy.request({
                method: "GET",
                url: "https://gorest.co.in/public/v1/users/" + userID,
                headers: {
                    'Authorization': "Bearer a8d9247cd6d06b9d6b23fb45af9ce00bab60b26f9db2e79213a507f1fec0b653"
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body.data.id).to.eq(userID)
                expect(resp.body.data).has.property("email", Email)
                expect(resp.body.data).has.property("gender", dataJson.gender)
            })
        })
    })
})