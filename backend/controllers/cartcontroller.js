import express from "express"
import userModel from "../models/usermodel.js"


//add to itme in user cart 
const addtocart =async(req,res)=>{
const {userId,itemId}=req.body;
console.log(itemId,"item id by given")
    try{
        const user=await userModel.findOne({_id:userId});
        console.log(user)
        const cartData=await user.cartData;

        if(!cartData[itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"item added to user cart"})
    }
    catch(err){
console.log(err);
res.json({success:false,message:"error occured"})
    }
}
//remove item from user cart
const removefromcart=async(req,res)=>{

    try {
        let user= await userModel.findById(req.body.userId)
        let cartData=await user.cartData
        if(!cartData[req.body.itemId]){

        }
        else{
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"item removed from cart "})
        
    } catch (error) {
        res.json({success:false,message:error})
    }

}

//get item from user cart

const getfromcart=async(req,res)=>{
 try {
    let user =await userModel.findById(req.body.userId)
 let cartData =await user.cartData;
 res.json({success:true,cartData})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:"error ocucurd"})
 }
}
export {addtocart,removefromcart,getfromcart}
