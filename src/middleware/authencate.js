require('dotenv').config();
const { reject } = require('bcrypt/promises');
var jwt = require('jsonwebtoken');


const varifytoken=()=>{
    // verify a token symmetric - synchronous
    return new Promise((resolve,reject)=>{
        var decoded = jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                return reject(err)
            }
            else{
                console.log(decoded)
                return resolve(decoded)
            }
        });
    })

}
const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
return res.status(404).send("Authorization token not found or incorrect");

if(req.headers.authorization.startsWith("Bearer "))
return res.status(404).send("Authorization token not found or incorrect");
//only want token
const token=req.headers.authorization.trim().split(" ")[1]
let decoded;
try{
     decoded=await varifytoken(token);
}
catch(err){
    console.log(err);
    return res.status(404).send("Authorization token not found or incorrect");
}
console.log("decode below");
console.log(decoded);
return next()
//get user_id
req.user=decoded.user

}

module.exports=authenticate;