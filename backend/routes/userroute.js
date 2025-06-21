import express from "express"
import { loginuser, registeruser } from "../controllers/usercontroller.js";

const userRouter=express.Router();

 userRouter.post('/login',loginuser);
 userRouter.post('/register',registeruser)

export default userRouter;