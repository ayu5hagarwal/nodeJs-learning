console.log("Hello world");
const http = require("http");
const server = http.createServer((req,resp) => {
    resp.writeHead(200, {"content-type": "text/html"});
    resp.write("<h1>Wow this is response from first server </h1>");
    resp.write("<h2> This is another head </h2>");
    resp.write("<button>Click ME </button>");
    resp.end("ok by by");
    
});


server.listen(9898);