const XLSX = require('xlsx');
const fs = require('fs')

const read = XLSX.readFile("./cypress/fixtures/Demo.xlsx")
console.log(read.SheetNames);
//const sheet=read.Sheets["sheet"]
const readExcel = XLSX.utils.sheet_to_row_object_array(read.Sheets["Sheet1"])
console.log(readExcel)
fs.writeFileSync("./cypress/fixtures/newJson.js", JSON.stringify(readExcel, null, 2), 'utf-8')

