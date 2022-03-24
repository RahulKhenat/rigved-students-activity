let fs = require("fs");
let read = require("readline-sync");

let EmpId = read.question("Enter Your EmpId : ");
let Name = read.question("Enter Your Name : ");
let Salary = read.question("Enter Your Salary : ");


let myobj = Object.assign({EmpId,Name, Salary});
let jsonString = JSON.stringify(myobj);

let data = fs.readFileSync(`emp.json`).toString();

if(data.endsWith('}]')==true){
    let d1= data.slice(0,(data.length-1))
    let d2= `${d1},\n${jsonString}]`
    fs.writeFileSync(`emp.json`,d2);
    console.log(`Record inserted!!`)
}
else{
    let d2 =`[${jsonString}]`
    fs.writeFileSync('emp.json',d2);
    console.log(`Record inserted!!`);
    
}