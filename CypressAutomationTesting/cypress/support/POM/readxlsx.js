try {
    const XLSX = require('xlsx');
    const fs = require('fs')
    const path = require("path")

    const wb = XLSX.readFile("./cypress/fixtures/Demo.xlsx")
    const exceldata = {}
    wb.SheetNames.forEach(sheetData => {
        console.log(sheetData)
        const jsonData = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetData])
        exceldata[sheetData] = jsonData
    })
    fs.writeFileSync('./cypress/fixtures/jsonData.json', JSON.stringify(exceldata, null, 4), "utf-8")
}
catch (e) {
    console.error(e);
}
