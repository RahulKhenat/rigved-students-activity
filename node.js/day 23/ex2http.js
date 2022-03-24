let http = require("http")
let PORT_NO = 3003;
http.createServer((request, response) => {
    let username = "rahul";
    response.writeHead(200,{'content-type' : 'text/html'});
    response.write(`<h1>hello rahul</h2>`);
    response.write(`<h2>username : ${username}</h2>`);
    response.end();
}).listen(PORT_NO, () => console.log (`this is cool ${PORT_NO}`));