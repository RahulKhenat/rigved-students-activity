let express = require("express")
let app = express();
PORT = 3001;

app.listen(PORT, () => console.log(`server running at ${PORT}`));

app.get("/user/:userId/:userName", (request, response) => {
    let userId = request.params.userId;
    let userName = request.params.userName;
    let user = { id: userId, name: userName };
    response.json(user);
});

app.post("/user/:userId/:userName", (request, response) => {
    let userId = request.params.userId;
    let userName = request.params.userName;
    console.log(`id: ${userId}, name: ${userName}`);
    response.send(`called post method`)
});