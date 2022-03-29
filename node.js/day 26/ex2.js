const mysql = require('mysql2');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cool_db',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));


//Get all employee
app.get('/employee', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get single employee
app.get('/employee/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE EmpId = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete single employee
app.delete('/employee/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM employee WHERE EmpId = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an employee
app.post('/employee', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpId = ?;SET @EmpName = ?;SET @Dipartment = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpId,@EmpName,@Dipartment,@Salary);";
    mysqlConnection.query(sql, [emp.EmpId, emp.EmpName, emp.Salary], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted employee id : '+element[0].EmpId);
            });
        else
            console.log(err);
    })
});

//Update an employee
app.put('/employee', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpId = ?;SET @EmpName = ?;SET @Dipartment = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpId,@EmpName,@Dipartment,@Salary);";
    mysqlConnection.query(sql, [emp.EmpId, emp.EmpName, emp.Salary], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});