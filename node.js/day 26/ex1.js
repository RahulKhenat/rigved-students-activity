let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");
const { response } = require("express");

let app = express();
let dbURL = "mongodb://localhost:27017";
PORT = 3001;

app.listen(PORT, () => console.log(`server running is ${PORT}`));
app.use(parser.json());
app.use(cors());

app.get("/users", (request, response) => {
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("cool")
        let cursor = db.collection("ishwar").find();
        let users = [];
        cursor.forEach((doc, err) => {
            if (err)
                throw err;
            users.push(doc);
        }, () => {
            response.json(users);
            client.close();
        });
    });

});
app.post("/users", (request, response) => {
    let userDocument = request.body;
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {

        if (error)
            throw error;
        let db = client.db("cool");
        db.collection("ishwar").insertOne(userDocument, (err, res) => {
            if (err) {
                response.status(409), json({
                    "message": `user with in id ${userDocument._id}`
                })
            }

            response.status(201).json(res)
            client.close();


        });
    });
});


app.get("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error) throw error;
        let db = client.db("cool");
        db.collection("ishwar").findOne({ _id: id })
            .then((doc) => {
                if (doc != null) {
                    response.json(doc);

                } else {
                    response.status(404).json({ "message": `Sorry ${id} doesn't exist` });
                }
                client.close();
            });
    });
});

app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("cool")
        db.collection("ishwar").deleteOne({ _id: id })
            .then((doc) => {
                response.json(doc);
                client.close();
            })
    });
});

app.put("/users/:id/:Name", (request, response)=>{
    let id = parseInt(request.params.id);
    let NewName = (request.params.Name);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
        if(error) throw error;
        let db = client.db("cool");
        db.collection("ishwar").updateOne({_id:id},{$set:{name : NewName}})
        .then((doc)=>{
            response.json(doc);
            client.close();
        })
    })
})
