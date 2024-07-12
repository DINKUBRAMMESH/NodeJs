  // import bcrypt from 'bcrypt'

// let userDetails = {
//     uid: "1",
//     upassword: "1234",
//     uemail: "uemail@gmail.com"
// }

// let hasedPassword = bcrypt.hashSync(userDetails.upassword,10)

// userDetails = {
//     ...userDetails,upassword:hasedPassword
// }

// if (bcrypt.compareSync("1234",userDetails.upassword)){
//     console.log("correct password")
// }
// else{
//     console.log("incorrect password");
// }





//async
import bcrypt from 'bcrypt';

let userDetails = {
    uid: "1",
    upassword: "1234",
    uemail: "uemail@gmail.com"
};

bcrypt.hash(userDetails.upassword, 10, (err, hashedPassword) => {
    if (err) throw err;

    userDetails = {
        ...userDetails,
        upassword: hashedPassword
    };

    bcrypt.compare("1234", userDetails.upassword, (err, correct) => {
        if (err) throw err;

        if (correct) {
            console.log("Correct password");
        } else {
            console.log("Incorrect password");
        }
    });
});
