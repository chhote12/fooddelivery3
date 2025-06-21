import React from 'react'
import {useNavigate} from 'react-router-dom'
import './cart.css'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import { assets } from '../../assets/assets'
export default function Cart() {
    const navigate=useNavigate();
    const {totalamount,caritem,
             removetocart,
            food_list,url}=useContext(Storecontext)
  return (
    <div className='cart'>
        <div className="cart-item">
            <div className="head">
                <p>item</p>
                <p>name</p>
                <p>price</p>
                <p>quantity</p>
                <p>total price</p>
                <p>remove</p>
            </div>

            <div className='hrr'>
                <hr />
            </div>
            {food_list.map((item,index)=>{
                if(caritem[item._id]>0){
                    return   <> <div className='item' key={index}>
                               <img src={url+"/images/"+item.image} alt="" srcset="" />
                               <p >{item.name}</p>
                               <p>{item.price}</p>
                               <p>{caritem[item._id]}</p>
                               
                               <p>{caritem[item._id]*item.price}</p>
                               <img src={assets.cross_icon} onClick={()=>removetocart(item._id)} alt="" srcset="" />
                          </div>
                          <div className='hrr'>
                          <hr />
                      </div>
                      </> 
                       
                }
            })
             
            }


        </div>
       <div className="total">
       <div className="left">
          <h2>cart total</h2>
          <div className='left1'>
            <p>sub total</p>
            <p>{totalamount()}$</p>
          </div>
          <div className="left2">
            <p>delivery fee</p>
            <p>2$</p>
          </div>
          <div className="totalamount">
            <p>total</p>
            <p>{totalamount()>0?totalamount()+2:0}$</p>
          </div>
          <div className='proceed'>
         <button id='proceed' onClick={()=>navigate('/order')}>proceedtocheckout</button>
          </div>
        </div>

        <div className="right">
             <p>if you have promo code enter </p>
             <div id='btns' className='xms'>
            <input type="text" placeholder='promo code' />
             <button id='promo'>sumbit</button>
            </div>
        </div>
       </div>
    </div>
  )
}
