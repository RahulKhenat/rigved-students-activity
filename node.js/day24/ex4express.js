let http = require("http");
let url = require("url");
let fs = require("fs");
let PORT_NO = 3005;
http.createServer((request, response) => {
    let urlString = request.url;
    if (urlString != '/favicon.ico') {
        let urlObject = url.parse(urlString, true);
        let user = urlObject.query;
        console.log(user);
        let data = fs.readFileSync('user.json');
        let dataString = data.toString();
        let jsArray = undefined;
        if (dataString.length < 1 || dataString == "") {
            jsArray = [];
        } else {
            jsArray = JSON.parse(dataString);
        }
        jsArray.push(user);
        let jsonObjArray = JSON.stringify(jsArray);
        console.log(jsonObjArray);
        fs.writeFileSync("user.json", jsonObjArray);
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(`<h2>Hi ${user.name}, your age is ${user.age}</h2>`)
    }
    response.end();
}).listen(PORT_NO, () => console.log(`Server running at ${PORT_NO}`));