import React from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext,useEffect } from 'react';
import { Storecontext } from '../../context/Storecontext';
import axios from "axios"
export default function Verify() {
//http://localhost:5175//verify?success=true&orderId=685646825d4d9e241d48a7f3
  const [searchparams,setsearchparams]=useSearchParams();
  const success=searchparams.get("success");
  const orderId=searchparams.get("orderId")
  const {url}=useContext(Storecontext)
const navigate=useNavigate()
  const verifypayment=async()=>{
    try {
      let response=await axios.post(url+"/api/order/verify",{orderId,success});
       console.log(response,"responce")
      if(response.data.success){
       
        setTimeout(() => {
          window.location.href = "http://localhost:5175/myorders";
        }, 5000);
        

      }
      else{
        console.log(response.data,"recived")
        alert("not veriftyf")
        navigate('/');
      }
    } catch (error) {
      console.log(error)
      alert("not verifyt")
      alert(error,"errrr")
    }
  }

  useEffect(() => {
   verifypayment();
  }, [])
  
  return (
    <div className='verify'>
      
      <div class="spinner">
      </div>
 
      
    </div>
  )
}
