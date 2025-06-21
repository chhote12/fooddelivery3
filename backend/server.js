import express from "express";
import 'dotenv/config'
const app=express();
import { connetionfunction } from "./config/db.js";
import cors from "cors"
import foodrouter from "./routes/foodroute.js";
import userRouter from "./routes/userroute.js";
import cartRouter from "./routes/cartroute.js";
//temp
import orderRouter from "./routes/orederroute.js";
app.use(express.json())
app.use(cors());
connetionfunction();
app.use('/images', express.static('uploads'));
app.use('/api/food',foodrouter);
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)
app.get('/',(req,res)=>{
    console.log(req);
    res.send({message:"response json"})
})
const port=800;
app.listen(4000,()=>{
console.log(`server is running on port${port}`)
})