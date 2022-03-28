let express = require("express")
let app = express();
let parser = require("body-parser")
PORT = 3001;

app.listen(PORT, () => console.log(`server running at ${PORT}`))

app.use(parser.json());
app.post("/user", (request, response) => {
    let content = request.body;
    console.log(content);
    response.send(`hello ${content.name}, your age is ${content.age}`)

});

app.post("/user/:id", (request, response) => {
    let content = request.body;
    let id = request.params.id;
    console.log(id, content);
   let user = { userId: id, userName: content.name, userAge: content.age };
   // response.json(`userId: ${id}, userName${content.name}, age: ${content.age}`);
   response.json(user);


});