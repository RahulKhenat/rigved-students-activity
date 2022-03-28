let express = require("express")
let app = express();
let parser = require("body-parser");
const { request } = require("http");
PORT = 3002;

app.listen(PORT, () => console.log(`server runing in ${PORT}`));

app.post("/user/:id", (request, response) => {
    let queryData = request.query;
    let id = request.params.id;
    let age =  queryData.age;
    response.send(`${id} is th path parameter and ${age} is query parameter`)
});

app.post("/",(request,response)=>{
    response.send(`hello world`);
});