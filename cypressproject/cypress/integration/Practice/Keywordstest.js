import "cypress-xpath"
import Keywords from "./Keywords";

describe('keywords', () => {
 var qafname,qamail,qaadress1

    const keywords = new Keywords()

    before(function() {
       // cy.viewport(1920,1080) 
        cy.fixture('webtables').then(function(data){
                this.data = data;
                qafname=this.data.firstnameqa;
                qamail=this.data.emailqa;
                qaadress1=this.data.qaaddress;
            })
        })
it('checking cypress keywords', function()
{
    keywords.url()
    keywords.qafirstname(qafname)
    keywords.qaemail(qamail)
    keywords.wrapkeyword(qaadress1)
   
})
it('using iframe', function()
{
    keywords.qaframe()
})

it('for datepicker', function()
{
    keywords.qadatepicker()
})
it('for intercept', function()
{
    keywords.qaintercept()
})

})