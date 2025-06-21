import userModel from "../models/usermodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const loginuser=async(req,res)=>{

    const {email,password}=req.body;
    console.log(req.body);
    try{
 const user=await userModel.findOne({email});
 if(!user){
   return res.json({success:fasle,message:"user not find please sign up first"})
 }

 const ismatch=await  bcrypt.compare(password,user.password);
 if(!ismatch){
   return  res.json({success:false,message:"enter correct detail"})
 }
 const token=creattoken(user._id);
 return res.json({success:true,token})
    }
catch(err){
    console.log(err);
   return res.json({success:false,message:"faild"})
}

}

const creattoken=(id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN_SECRET)
}
const registeruser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        console.log(req.body)
    const user=await userModel.findOne({email})
    if(user){
        return res.json({success:false,message:"user alredy exits"})
    }
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter valid email"})
    }
    if(password.length<8){
        return res.json({success:false,message:"please enter 8 length minimum passowrd"})
    }

    const salt=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,salt)
    const newuser=new userModel({
        name:name,
    email:email,
    password:hashpassword,
    
    })

     const newsuser=await newuser.save();
     const token=creattoken(newsuser._id);
     res.json({success:true,token})
    }
    catch(err){
       return res.json({success:false,message:"error occured"})
    }

}

export {loginuser,registeruser}