import React from 'react'
import './addfood.css'
import { assets, url } from '../../assets/assets'
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

export default function Addfood() {

    const[inputimage,setinputimage]=useState(null);

    const [data,setdata]=useState({
        name:"",
        description:"",
        price:"",
        category:"",

    })
    const handler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata((prev)=>({...prev,[name]:value}));
        


    }
    const URLs=url;

    const handlesubmit=async(e)=>{
        e.preventDefault();
      const formdata=new FormData();
      formdata.append("name",data.name);
      formdata.append("description",data.description);
      formdata.append("category",data.category);
      formdata.append("price",Number(data.price));
      formdata.append("image",inputimage);
      console.log(formdata)
  try {
    const response = await axios.post(`${URLs}/api/food/add`, formdata);
    console.log(response.data.success);

    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setinputimage(false);
      toast.success(response.data.message)
    } else {
        console.log(response,"uplaod and add failed")
      console.log("Upload failed");
      toast.error(response.data.message)
    }
  } catch (error) {
    console.error("Error during upload:", error);
    toast.error("error occured")
  }
    }
  return (
    <div className='add'>
      <form action="" className="form" onSubmit={handlesubmit}>
        <div className="upload">
        <label htmlFor="upload-logo">
                upload image
            </label>
            <img className='upload-image' src={inputimage?URL.createObjectURL(inputimage):assets.upload_area} alt="" srcset="" />
            
            <input type="file"  onChange={(e)=>setinputimage(e.target.files[0])} id='upload-logo' />
            {console.log(inputimage)}
        </div>
        <div className="product-name">
            <p>product name</p>
            <input type="text" name='name' value={data.name} placeholder='enter product name' onChange={handler} />
        </div>
 <div className="product-description">
    <p>product description</p>
   <textarea name="description" id="desc" value={data.description} placeholder='type here' onChange={handler}></textarea>

 </div>

 <div className="add-cat-price">
    <div className="cat">
      <p>product category</p>
      <select name="category" id="category" value={data.category} onChange={handler}>
      <option value="others" >select</option>
        <option value="Salad">Salad</option>
        
        <option value="Rolls">Rolls</option>
        <option value="Deserts">Deserts</option>
        <option value="Sandwhich">Sandwhich</option>
        <option value="Cake">Cake</option>
        <option value="Pure Veg">Pure Veg</option>
        <option value="Pasta">Pasta</option>
        <option value="Noodles">Noodles</option>
      </select>
    </div>
    <div className="price">
          <p>add price</p>
          <input type="Number" name='price' value={data.price} placeholder='0$' onChange={handler} />
    </div>
 </div>
 <button  type='submit' className="add-btn" >Add</button>
      </form>
    </div>
  )
}
