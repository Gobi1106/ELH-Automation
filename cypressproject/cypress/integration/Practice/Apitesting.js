

class Apitesting{
 
    apiurl()
    {
        cy.visit('https://dummy.restapiexample.com/')
        cy.request('GET','https://dummy.restapiexample.com/').then((response)=>{
        expect(response).to.have.property('status',200)

        })
        
    }
    newapi()
    {
        cy.request('http://dummy.restapiexample.com/api/v1/employees').then((emp)=>{

expect(emp.body.data).to.have.length(24)
//expect(emp.body.data)
    })     
    }
    apiemp(empname)
    {
         cy.visit('https://dummy.restapiexample.com/')
         cy.intercept('GET','http://dummy.restapiexample.com/api/v1/employees',{Fixture:'ApiTesting.json'})
         cy.visit('https://dummy.restapiexample.com/')
         cy.log(employee_name)
    }

}
export default Apitesting