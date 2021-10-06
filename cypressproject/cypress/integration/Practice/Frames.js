
class Frames{
    qaframe()
{
   cy.wait(3000)
    cy.visit('http://demo.automationtesting.in/Frames.html')
    cy.request('/Frames.html')
  const frame= cy.iframe("#singleframe").xpath('//input[@type="text"]')
   frame.type('frame')
}
       
}
export default Frames