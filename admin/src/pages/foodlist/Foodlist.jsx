import React from 'react'
import './foodlist.css'
import { useState ,useEffect} from 'react'
import {url} from '../../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function Foodlist() {
  const [list,setlist]=useState([]);
  const urls=url;

  const fetchlist=async()=>{
    try{
      const result=await axios.get(`${urls}/api/food/list`);
      setlist(result.data.data);
      console.log(result.data.data)
      console.log(list)
      console.log("error not occured")
    }
    catch(err){
      console.log(err);
    }
    
  }
  useEffect(() => {
    fetchlist();
  
   
  }, [])
  
  const handleclick=async(itemid)=>{
    console.log(itemid)
         const result =await axios.post(`${urls}/api/food/remove`,{id:itemid});
         console.log(result.data)
         if(result.data.success){
          fetchlist()
          toast.success(result.data.message);
  }
  else{
    toast.error("erro ocucred",result.data.message)
  }
         }


  return (
    <div className='list'>
             <h2>All Food List</h2>
            <div className="head">
              <b>Image</b>
              <b>Tittle</b>
              <b>Price</b>
              <b>Category</b>
              <b>Remove</b>
            </div>
            <div className="item-list">
              {
                list.map((item,index)=>{
                 return(
                  <>
                  <div className="hr"><hr /></div>
                  <div className="item-c" key={index}>
                  <img src={`${url}/images/${item.image}`} alt="" srcset="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.category}</p>
                  <p onClick={()=>handleclick(item._id)} className='cursor'>X</p>
                </div>
                  </>
                 )
                })
              }
            </div>

    </div>
  )
}
