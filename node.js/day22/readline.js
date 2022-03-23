let fs = require("fs");
let read = require("readline-sync");

let EmpId = read.question("Enter Your EmpId : ");
let Name = read.question("Enter Your Name : ");
let Salary = read.question("Enter Your Salary : ");


let myobj = Object.assign({EmpId,Name, Salary});
console.log(myobj);
let jsonString = JSON.stringify(myobj);
console.log(jsonString);

fs.writeFileSync(`emp.json`, jsonString);
console.log('done..');