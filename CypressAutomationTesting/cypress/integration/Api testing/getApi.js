/// <reference types ="Cypress"/>
describe("API Test",()=>{
var TokenId=""
it("Get Api",()=>{
cy.request({
    method:"GET",
    url:"https://gorest.co.in/public/v1/users/",
    headers:{
        'Authorization':TokenId
    }
}).then((resp)=>{
    expect(resp.body.meta.pagination.links.next).to.eq("https://gorest.co.in/public/v1/users?page=2")
    expect(resp.status).to.eq(200)
    expect(resp.body.data[0].name).to.equals("Hamsini Dutta DO")
    expect(resp.body.data[0]).to.have.property("id", 8)
})

})

})