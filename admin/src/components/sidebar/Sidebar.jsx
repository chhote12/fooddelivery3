import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
         <NavLink to="/">
        <div className="item">
        
         <img src={assets.add_icon} alt="" srcset="" />
         <p>add food item</p>
         
        </div>
        </NavLink>
        <NavLink to="/orderlist">
        <div className="item">
              
              <img src={assets.order_icon} alt="" srcset="" />
              <p>order list</p>
             
        </div>
        </NavLink>
        <NavLink to="/food">
        <div className='item' >
        
        <img src={assets.order_icon} alt="" srcset="" />
        <p>food item  list</p>
        
        </div>
        </NavLink>
    </div>
  )
}
