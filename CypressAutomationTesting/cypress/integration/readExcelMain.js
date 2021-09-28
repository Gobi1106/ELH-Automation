    // describe('Test Suite', ()=>{
     
    //     before(function(){
    //         cy.task('readXlsx',{file :'cypress\fixtures\Demo.xlsx',sheet : "sheet"}).then((row)=>{
    //             cy.writeFile("cypress\fixtures\jsonData.xlsx",{row})
    //         })

    //     })



    // it('Convert excel data to json',function(){
    //         cy.task('readXlsx',{file :'cypress\fixtures\Demo.xlsx',sheet : "sheet"})
    //             //cy.writeFile("cypress\fixtures\jsonData.xlsx",{row})

    //     cy.visit("http://demo.automationtesting.in/Register.html")
     
    // })
// })

// class readExcelMain{
//      generateJsonFromExcel(){

//                 var XLSX = require('xlsx');
//                 const fs=require('fs')
//                 cy.log("-------")
//                 const filePath="./Demo.xlsx";
//                 const sheetName="sheet";
//                     const wb=XLSX.readFile("filePath")
//                     wb.Sheets[sheetName]
//                     const jsondata= xlsx.utils.sheet_to_json(wb)
//                     fs.writeFileSync(
//                         "./cypress/fixtures/testData.json",
//                         JSON.stringify(jsondata, null, 4),
//                         "utf-8"
//                       );
//                 }    
// }
// module.exports=new readExcelMain();



