import React from 'react'
import './myorder.css'
import { useContext ,useEffect} from 'react'
import { Storecontext } from '../../context/Storecontext'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
export default function Myorder() {
    const {token,url}=useContext(Storecontext);
 const[data,setdata]=useState([]);
    const fetchorder=async()=>{
           try {
            const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
           if(response.data.success){
                    setdata(response.data.data)
                   // alert("success full api hit")
           }
           else{
            alert("errr")
           }
           } catch (error) {
            alert(error)
           }
    }

    const navigate=useNavigate();
    const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setTrigger(true); // Force update after initial render
  }, []);

  useEffect(() => {
    console.log("After re-render, token:", token); // Check again
  }, [trigger]);
  
    useEffect(() => {
        console.log(token,"here is token")
        if(token){
            fetchorder();
        }
      
    else{
        console.log("erro hai ")
        navigate('/cart')
    }
   
    
    
    }, [token])
    const handleclick=async()=>{
        fetchorder();
    }
    
  return (
    <div className='myorders'>
        <h3 className="heading">Orders</h3>
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
            <div className="status">
 <p><span>&#x25cf;</span>{item.status}</p>
            </div>
            <div className="btn">
                <button onClick={handleclick}>track order</button>
            </div>
        </div>
    )
  })}
        </div>
      
    </div>
  )
}
