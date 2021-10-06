function filePicked(oEvent) {
    // Get The File From The Input
    var oFile = oEvent.target.files[0];
    var sFilename = oFile.name;
    // Create A File Reader HTML5
    var reader = new FileReader();

    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
        var data = e.target.result;
        //var cfb = XLS.CFB.read(data, {type: 'binary'});
        var wb = XLSX.parse_xlscfb(data);
        // Loop Over Each Sheet
        wb.SheetNames.forEach(function(sheetName) {
            // Obtain The Current Row As CSV
           // var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
            var oJS = XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);   

            $("#my_file_output").html(XLSX);
            console.log(oJS)
        });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
}

  /*
var dataPathExcel = "readdata.xlsx"
var wb = xlsx.readFile(dataPathExcel);
var sheetname = wb.SheetNames[0]
var sheetvalue = wb.Sheets[sheetname];
var exceldata=xlsx.utils.sheet_to_row_object_array(sheetvalue);
console.log(exceldata)*/
/*describe('Reading data from excel file', () => {
    before(() =>{
        cy.task('readXlsx', {file:'cypress/fixtures/readdata.xlsx',sheet: "Sheet1" }).then((rows) =>{
            rowsLength = rowlength;
            cy.writeFile('cypress/fixtures/xlsxdata.json', {rows})
        })
       
    })


    it('Writing xlsx data into json file', ()  =>{
        cy.fixture('xlsxdata').then((data) =>{
            for(let i = 0; i< rowsLength; i++){
                cy.visit('https://www.facebook.com/')
             // cy.url().should('include','/www.facebook.com/')
                  cy.xpath('//input[@id="email"]').type(data.rows[i].Username);
                  cy.xpath('//input[@id="pass"]').type(data.rows[i].Password);
                  
            }
        })
    })
})*/