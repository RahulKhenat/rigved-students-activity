let http = require("http")
let PORT_NO = 3001;
http.createServer(function (request, response){
    console.log(`request arrives`);
    response.write ("this is rahul")
    response.end();
}).listen(PORT_NO, function(){
    console.log(`this is cool ${PORT_NO}`)
});