import * as http from "node:http";


function handleRequest(req,res){
    // console.log(req);
    res.writeHead(200);
    res.end("Hello bhai");
}

const server = http.createServer(handleRequest);

server.listen(80,undefined,() => {
    console.log("listening",server.address());
})