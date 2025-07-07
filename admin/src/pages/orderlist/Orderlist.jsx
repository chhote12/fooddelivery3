import React, { useEffect } from 'react'
import './orderlist.css'
import { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
export default function Orderlist() {
  
    const[data,setdata]=useState([]);
    const[state,setstate]=useState({status:""})
     const url = "https://fooddelivery3-1.onrender.com"
    const fetchorder=async()=>{
     
           try {
            const response=await axios.get(url+"/api/order/adminorder");
           if(response.data.success){
                    setdata(response.data.data)
                    
           }
           else{
            alert("errr")
           }
           } catch (error) {
            alert(error)
           }
    }
useEffect(() => {
  fetchorder();

 
}, [])

    
    const handlechange=async(e,iteId)=>{
      const l=e.target.value;
      const name=e.target.name
      setstate(l);
          
      try {
        const result= await axios.post(url+"/api/order/status",{itemId:iteId,[name]:l});

       if(result.data.success){
        toast.success("successfully order status updata")
        fetchorder()
       }
       else{
        toast.error("error occured")
       }
        
      } catch (error) {
        toast.error("errro ocucur",error)
      }
    }
    
  return (
    <div className='myorders'>
        <h3 className="heading">Orders Page</h3>
        <div className="order-c">
  {data.map((item,index)=>{
    return(
        <div className="oreder-item" key={index}>
            <div className="image">
                <img src={assets.parcel_icon} alt="" srcset="" />
            </div>
            <div className="item-name">
                <p>
                {item.items.map((itm,index)=>{
                    if(index===item.items.length-1){
                        return itm.name+" X "+itm.quantity
                    }
                    else{
                      return  itm.name+" X "+itm.quantity+","
                    }
                })}
                </p>
            </div>
            <div className="amount">
                <p>{item.amount}</p>
            </div>
            <div className="item-len">
                <p>Items:{item.items.length}</p>

            </div>
            <div className="statuss">
               <select name="status" value={item.status} onChange={(e)=>handlechange(e,item._id)} id=""  >
                <option value="food processing">food processing</option>
                <option value="out for delivery"> Out for delivery</option>
                <option value="delivered">delivered</option>
               </select>
            </div>
            
        </div>
    )
  })}
        </div>
      
    </div>
  )
  
}
