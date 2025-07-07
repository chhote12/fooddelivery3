import mongoose from "mongoose"

export const connetionfunction=async()=>{
 try{
          await mongoose.connect(process.env.MONGO_URL);
          console.log("success")
 }
 catch(err){
 console.log(err,"db connection errror")
 }
}