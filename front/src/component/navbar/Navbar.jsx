import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { assets } from '../../assets/assets.js'
import './navbar.css'
import { Storecontext } from '../../context/Storecontext.jsx'
import { Profiler } from 'react'
export default function Navbar(props) {
 const{totalamount,token,settoken}=useContext(Storecontext)
    const [menu ,setmenu]=useState("home");
    const logout=()=>{
           localStorage.removeItem("token");
           settoken("");
           navigate("/")
    }
    const navigate=useNavigate()
   
  return (
    <div id='nav'>
      <Link to ='/'><img src={assets.logo} alt="" className='logo' srcset="" /></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#menu-explore' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>items</a>
        <a href='#contact' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
    </ul>
    <div id="right-nav">
        <img src={assets.search_icon} className='searchbtn' alt="" srcset="" />
        <div id="basket">
        <Link to="/cart">
  <img src={assets.basket_icon} alt="Basket Icon" />
</Link>
            <div id={totalamount()>0?"dot":""}></div>
        </div>
        {!token?<button id='button' onClick={()=>props.setshowlogin(true)}>
           sign-in
        </button>:<div className="nav-profile">
          <img className='profile-image' src={assets.profile_icon} alt="" srcset="" />
          <ul className="dropdown">
            <li onClick={()=>navigate('/myorders')}><img className='imgs' src={assets.bag_icon} alt="" srcset="" />
            <p>orders</p>
            </li>
            <hr />
            <li onClick={logout}>
              <img className='imgs'  src={assets.logout_icon} alt="" srcset="" />
              <p>logout</p>
            </li>
          </ul>
        </div>
        }
    </div>
    
    </div>
    
  )
}
