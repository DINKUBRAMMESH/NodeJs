import jsonwebtoken from 'jsonwebtoken'

let payload={
    uname:"db",
    uid:"db07",
    upassword:"mdb"
}

let token = jwt.sign(payload,"xyz");
console.log(token)