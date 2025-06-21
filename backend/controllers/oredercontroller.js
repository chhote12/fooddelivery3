import orderModel from "../models/ordermodel.js";
import userModel from "../models/usermodel.js";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET)
const placeorder=async(req,res)=>{
try {

    const userorder=new  orderModel({
        userId:req.body.userId,
    items:req.body.items,
    amount:req.body.amount,
    address:req.body.address
    
    })

    await userorder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

    const line_items=req.body.items.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:item.name,
            },
            unit_amount:item.price*80*100,
        }
        ,
        quantity:item.quantity,
    }))

    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"delivery charge"
            },
            unit_amount:2*80*100,
        },
        quantity:1,
        
    })
    const frontendurl="http://localhost:5175"

    const session=await stripe.checkout.sessions.create({
line_items:line_items,
mode:"payment",
success_url:`${frontendurl}/verify?success=true&orderId=${userorder._id}`,
cancel_url:`${frontendurl}/verify?success=false&orderId=${userorder._id}`
    })
    res.json({success:true,session_url:session.url})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
}
}


const verifyorder=async(req,res)=>{
    const{orderId,success}=req.body;
    console.log(req.body,"we are come here ")
    try {
        if(success==="true"){
            console.log("come here")
           //const k= await orderModel.findByIdAndUpdate(orderId,{payment:true});
           const k = await orderModel.findByIdAndUpdate(orderId, { payment: true }, { new: true });

           console.log(k,"this is object ")
            res.json({success:true,message:"paid successfully"})
        }
        else{
            console.log("not paid")
            //await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"not paid"})
        }
    } catch (error) {
        console.log("erro occured")
        console.log(error);
        res.json({success:false,message:"error"})
    }

}
const userordercontroller=async(req,res)=>{
try {
   const data= await orderModel.find({userId:req.body.userId});
   res.json({success:true,data:data});

    
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
}
}

const adminorder=async(req,res)=>{
   try {
    const result=await orderModel.find();
    res.json({success:true,data:result})
   } catch (error) {
    console.log(err);
    res.json({success:false,message:"Errro"})
   }
    
}
const updatestate=async(req,res)=>{
    const {status,itemId}=req.body;
    try{
         await orderModel.findByIdAndUpdate(itemId,{status:status});
         res.json({success:true,message:"success full update"})
    }
    catch(err){
        res.json({success:false,message:"Error"})

    }
}
export {placeorder,verifyorder,userordercontroller,adminorder,updatestate}