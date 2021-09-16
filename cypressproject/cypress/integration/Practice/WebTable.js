import "cypress-xpath"
import Webtablelist from "./Webtablelist";

describe('Webtable demopage', () => {
 var tablename,firstname1,lastnaame1,email1,age1,salary1,newsalary1
     
 const webtablelist = new Webtablelist()
    
      before(function() {
      //  cy.viewport(1920,1080) 
        cy.fixture('webtables').then(function(data)
        {
                this.data=data;
                tablename=this.data.tablefname;
                firstname1=this.data.tablefname;
                lastnaame1=this.data.tablelastname;
                email1=this.data.tableemail;
                age1=this.data.webtableage;
                salary1=this.data.webtablesalary;
                newsalary1=this.data.newsalary;
                //qafname=this.data.firstnameqa;
                //qamail=this.data.emailqa;
                //qaadress1=this.data.qaaddress;
            })
        })
        it('Webtable demopage', function()
        {
          
          webtablelist.tableurl()
          webtablelist.webtablename(tablename)
          webtablelist.editfname(firstname1)
          webtablelist.editpagelname(lastnaame1)
          webtablelist.editpageemail(email1)
          webtablelist.editpageage(age1)
          webtablelist.editpagesalary(salary1,newsalary1)  
          webtablelist.getrowdata()    

    })
    
   
})