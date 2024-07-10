import fs from 'fs'

fs.writeFile('./writefile.txt','Hi maya, DB',(err)=>{
    if(err) throw err
    console.log("file written successfully");
})

