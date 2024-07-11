import bcrypt from 'bcrypt'

let uemail = alert(prompt("enter your email"))
let upassword = alert(prompt("enter your password"))

let user = {
    email: uemail,
    password: upassword 
}

bcrypt.hash(user.password , 10, (err,hashedPassword)=>{
    if(err) throw err 
    user={
        ...user,new_password:hashedPassword
    }

    bcrypt.compare(upassword,new_password,(err,correct)=>{

        if(err) throw err;

        if(correct){
            console.log("Correct Password");
            alert("Correct Password");
        }
        else{
            console.log("Incorrect Password");
            alert("Incorrect Password")
        }
    })
   


})

