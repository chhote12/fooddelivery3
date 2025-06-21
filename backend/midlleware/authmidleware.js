import express from "express"
import jwt from "jsonwebtoken"
const auth=async(req,res,next)=>{

    try{

   
const {token}=req.headers;
console.log(token,"chhote singh i sking")
if(!token){
return res.json({succees:false,message:"not authorized login again"})
}

const token_decode=jwt.verify(token,process.env.JWT_TOKEN_SECRET);
console.log(token_decode)
console.log(token_decode.id)
req.body.userId=token_decode.id
console.log("hello mr x is",req.body.userId,"with good gun")
next();

}
catch(err){
    console.log("error in auth",err)
    return res.json({succees:false,message:"error"})
}
}
export default auth