import jsonwebtoken from 'jsonwebtoken'

let payload={
    uname:"db",
    uid:"db07",
    upassword:"mdb"
}
let secretKey ="xyz"
let token = jsonwebtoken.sign(payload,secretKey);
console.log(token)

let user= jsonwebtoken.verify(token,secretKey)
console.log(user)