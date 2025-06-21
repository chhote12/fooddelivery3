import React, { useContext,useState,useEffect } from 'react'
import { Storecontext } from '../../context/Storecontext'
import './placeorder.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Placeorder() {
    const {totalamount,token,food_list,caritem,url}=useContext(Storecontext)

    const[data, setdata] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    });

    const navigate =useNavigate();
    useEffect(() => {
      if(!token){
        navigate('/cart')

      }
    else if(totalamount()==0){
      navigate('/cart')
    }
     
    }, [])
    

    const changehadler=(e)=>{
  const name=e.target.name;
  const value =e.target.value;
  setdata((data)=>({...data,[name]:value}))
  console.log(data);
    }


    const handlesubmit=async(e)=>{

                 e.preventDefault();
                  const oredItems=[];
               food_list.map((item)=>{
              if(caritem[item._id]>0){
               let itemInfo=item;
               itemInfo["quantity"]=caritem[item._id]
              oredItems.push(itemInfo);
               
   


  }
})

let orderdata={
  address:data,
items:oredItems,
amount:totalamount()+2,

}
let response=await axios.post(url+"/api/order/place",orderdata,{headers:{token}});
if(response.data.success){
  const {session_url}=response.data;
  window.location.replace(session_url)
}
else{
  alert("error")
}

    }
  return (
    <form className='placeorder-form' onSubmit={handlesubmit}>
      <div className="left">
       <div className="head">
        <h3>Delivery Information</h3>

       </div>
             <div className="first-last">
                <input type="text" name='firstName'required onChange={changehadler} value={data.firstName} placeholder='first name'/>
                <input type="text" name='lastName' required onChange={changehadler} value={data.lastName} placeholder='last name' />
             </div>
             <div className="email">
                <input type="email" name='email' required onChange={changehadler} value={data.email} placeholder='email' />
             </div>
             <div className="street">
                <input type="text" name='street' required onChange={changehadler} value={data.street} placeholder='street' />
             </div>
             <div className="city-state">
                <input type="text" name='city' required onChange={changehadler} value={data.city} placeholder='city' />
                <input type="text" name='state' required onChange={changehadler} value={data.state} placeholder='state' />
             </div>
             <div className='zip-country'>
                <input type="text" name='zipcode' required onChange={changehadler} value={data.zipcode} placeholder='zip' />
                <input type="text" name='country' onChange={changehadler} value={data.country} placeholder='country' />
             </div>
             <div className="phone">
                <input type="text" name='phone' required onChange={changehadler} value={data.phone} placeholder='phone number' />
             </div>
      </div>
      <div className="right">
     
      <div className="left0">
          <h3>cart total</h3>
          <div className='left1'>
            <p>sub total</p>
            <p>{totalamount()}$</p>
          </div>
          <div className="hr"><hr /></div>
          <div className="left2">
            <p>delivery fee</p>
            <p>2$</p>
          </div>
          <div className="hr"><hr /></div>
          <div className="totalamount">
            <p>total</p>
            <p>{totalamount()>0?totalamount()+2:0}$</p>
          </div>
       
          <div className="pay">
            <button type='submit'>proceedtopay</button>
          </div>
          </div>

     

      
      </div>
    </form>
  )
}
