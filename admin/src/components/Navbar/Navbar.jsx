import React from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'
export default function Navbar() {
  return (
    <>
    <div className='navbar'>
           <div className="logo">
                 <div className="logo1">
                 <img id='logo' src={assets.logo} alt="" srcset="" />
                
                 </div>
           </div>
           <div className="image">
               <img id="admin" src={assets.chhote} alt="" srcset="" />
           </div>
    </div>
    <div className="hr">
                <hr />
    </div>
    </>
  )
}
