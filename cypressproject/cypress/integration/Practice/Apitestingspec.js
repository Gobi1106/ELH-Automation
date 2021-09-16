import "cypress-xpath"
import Apitesting from "./Apitesting"

/// <reference types = "cypress" />
describe('API Testing', () => {

   const apitesting = new Apitesting()

 
     it('Checking api commands', () => {
         apitesting.apiurl()
         apitesting.newapi()
         //apitesting.apiemp(employee_name)/
     }) 
    })  