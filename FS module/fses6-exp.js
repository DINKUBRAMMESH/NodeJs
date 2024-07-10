import fs from 'fs'
fs.readFile("notes2.txt", "utf-8", (err,data)=>{
    fs.writeFile("notes.txt",data,(err)=>{
        if( err ) throw err
        console.log("written file successfully");
    })
})