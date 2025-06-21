import express from "express"
import fs from 'fs';
import foodmodel from "../models/foodmodel.js";
import { UNSAFE_hydrationRouteProperties } from "react-router-dom";

const addfood=async(req,res)=>{
    console.log(req)
let image_file_name=`${req.file.filename}`


const food=new foodmodel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    image:image_file_name,
    category:req.body.category
})

try{
  await food.save();
  res.json({success:true,message:"food added"});
}
catch(err){
  console.log(err);
  res.json({success:false,message:"food added failed"})
}
}

const listfood=async(req,res)=>{
    try{
 const result= await foodmodel.find({});
    res.json({success:true,data:result})
    }
    catch(err){
res.json({success:false,message:err})
    }
}

const removefood=async(req,res)=>{
    try{
        const result= await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${result.image}`, (err) => {
            if (err) {
              console.error("Failed to delete file:", err);
              // optionally return res.status(500).json(...)
            } else {
              console.log("File deleted");
            }});
         await foodmodel.findByIdAndDelete(req.body.id)
         res.json({message:"food removed",success:true})


    }
    catch(err){
        console.log(err)
           res.json({success:false,message:"food is not removde error occurde",error:err})
    }
}
export {addfood,listfood,removefood}