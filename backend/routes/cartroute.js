import express from "express"
import { addtocart, getfromcart, removefromcart } from "../controllers/cartcontroller.js";
import auth from "../midlleware/authmidleware.js";

const cartRouter=express.Router();

cartRouter.post('/add',auth,addtocart);
cartRouter.post('/remove',auth,removefromcart)
cartRouter.post('/get',auth,getfromcart);

export default cartRouter;