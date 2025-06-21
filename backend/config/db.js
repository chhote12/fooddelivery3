import mongoose from "mongoose"

export const connetionfunction=async()=>{
 try{
          await mongoose.connect("mongodb://localhost:27017/fooddbgreatstack");
          console.log("success")
 }
 catch(err){
 console.log(err,"db connection errror")
 }
}