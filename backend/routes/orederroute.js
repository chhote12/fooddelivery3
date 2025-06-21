import express from "express";
import { adminorder, placeorder, updatestate, userordercontroller, verifyorder } from "../controllers/oredercontroller.js";
import auth from "../midlleware/authmidleware.js";

const orderRouter=express.Router();


orderRouter.post('/place',auth,placeorder)
orderRouter.post('/verify',verifyorder)
orderRouter.post('/userorders',auth,userordercontroller)
orderRouter.get('/adminorder',adminorder)
orderRouter.post('/status',updatestate);
export default orderRouter