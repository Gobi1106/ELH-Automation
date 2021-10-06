describe('API Testing', () => {

    
     it('Verify the intercept command in apitesting', () => {
     cy.visit('https://jsonplaceholder.typicode.com/')
     
     cy.intercept({
         path : '/users'
     }).as('users')

     cy.get('table:nth-of-type(1)  a[href="/users"]').click()

     cy.wait('@users').then(user=>{
        // cy.log(JSON.stringify(user))
         expect(user.response.body).to.have.length(10)
     })
    })

    it('Verify the intercept using text ', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
       // cy.request('typicode.com/')
        cy.intercept('GET','/users',
       {body: 
        { name : 'Ervin Howell',
        id:'2',
        email: "Rey.Padberg@karina.biz"
    },
    }).as('users')
        cy.get('table:nth-of-type(1)  a[href="/users"]').click()
    }).then  
    expect(email)
        it('Verify the intercept command in apitesting along with fixtures', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
            cy.intercept('GET','/users',{fixture :'ApiTesting.json'}).as('users')
            cy.get('table:nth-of-type(1)  a[href="/users"]').click()
        
    })  
    })