import http from 'http'

const server = http.createServer((req,resp)=>{
    resp.end(`<h1>Hello mayadb</h1>`);
});

server.listen(8000,(err)=>{
    if(err) throw err
    console.log("server running....")
})
 


// Another method
// import http from 'http'
// http.createServer((req,resp)=>{
//     resp.end(`<h1>hi maya</h1>`)
// }).listen(7000,(err)=>{
//     if(err) throw err
//     console.log("server running")
// })
