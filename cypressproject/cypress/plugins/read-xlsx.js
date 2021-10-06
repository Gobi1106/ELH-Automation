
const xlsx = require("xlsx");
const fs = require("fs");

const wb = xlsx.readFile('./cypress/fixtures/readdata.xlsx');
const sheetname = wb.Sheets["Sheet1"]
//const ws = wb.Sheets("Sheet1");
const exceldata={}
wb.SheetNames.forEach(sheetData=>{

const data = xlsx.utils.sheet_to_row_object_array(sheetname);
exceldata[sheetData]=data
console.log(data);
fs.writeFileSync('./cypress/fixtures/readdata.json',JSON.stringify(data,null,2),"utf-8")
})

