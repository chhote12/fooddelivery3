import React, { useState } from 'react'
import './loginsignup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'

import axios from 'axios'

export default function Loginsignup({setshowlogin}) {
 const {url,settoken} =useContext(Storecontext)
    const [currentstate,setcurrentstate]=useState('login')
    const [data,setdata]=useState({
      name:"",
      email:"",
      password:""
    })
    const handlechange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       console.log(value)
       setdata((data)=>({...data,[name]:value}));
    }
    const handlesubmit=async(e)=>{
      e.preventDefault();
      let newurl=url;
             if(currentstate==="login"){
              newurl+="/api/user/login"
             }     
             else{
              newurl+="/api/user/register"
             }
      const result=await axios.post(newurl,data);
      console.log(result)
      if(result.data.success){
        settoken(result.data.token);
        localStorage.setItem("token",result.data.token)
        setshowlogin(false);
        console.log("error not")
      }
      else{
        console.log("error not")
        alert(result.data.message)
      }

    }
  return (
    <div className='login-popup'>
      <form action="" onSubmit={handlesubmit} className='login-popup-form'>
           <div className="l-title">
                 <h2>{currentstate}</h2>
 <img src={assets.cross_icon} onClick={()=>setshowlogin(false)}  />
           </div>
           <div className="login-popup-input">
            {currentstate==="sign-up"?<input type="text" name='name' onChange={handlechange} value={data.name} placeholder='your name ' required />:<></>}
            <input type='email'name='email' onChange={handlechange} value={data.email} placeholder='your email' required/>
            <input type="text" name='password' onChange={handlechange} value={data.password} placeholder='password' required />
            
           </div>
         <div className='align-row' >  <button type='submit' id='btn' >{currentstate==="login"?"login":"createaccount"}</button></div>
           <br />
           <div className='align-row'>{currentstate==="login"?<p>create a new account <span onClick={()=>setcurrentstate("sign-up")}>sign-up</span></p>
           :<p>alredy have a account <span onClick={()=>setcurrentstate("login")}>login</span></p>}</div>
           
           
           </form>
    </div>
  )
}
