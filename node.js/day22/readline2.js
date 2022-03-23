let fs = require("fs");
let data = fs.readFileSync("emp.json");



let jsonString = data.toString();
let jsObject = JSON.parse(jsonString);
console.log(jsonString);
console.log(jsObject);

let{EmpId, Name, Salary}= jsObject;
console.log(`Id= ${EmpId},Name= ${Name}, Salary= ${Salary}`);