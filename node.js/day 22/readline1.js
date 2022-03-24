let fs=require('fs');
let emp = fs.readFileSync('emp.json');
let jsonString=emp.toString();
let jsobj=JSON.parse(jsonString);
for(let i=0;i<jsobj.length;i++){
    let{EmpId, Name, Salary}=jsobj[i];
    console.log(`EmpId: ${EmpId}, Name: ${Name}, Salary: ${Salary}`)
}