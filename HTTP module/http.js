import http from 'http'

const server = http.createServer((req,resp)=>{
    resp.end("Hello maya");
});

server.listen(8000,(err)=>{
    if(err) throw err
    console.log("server running....")

})