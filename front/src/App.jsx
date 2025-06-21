import React, { useState } from 'react'
import Navbar from './component/navbar/navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './component/footer/Footer'
import Loginsignup from './component/loginsignup/Loginsignup'
import Verify from './pages/verify/Verify'
import Myorder from './pages/myorder/Myorder'


export default function App() {

  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
    {showlogin?<Loginsignup setshowlogin={setshowlogin}></Loginsignup>:<></>}
    <div className='app'>
    <Navbar setshowlogin={setshowlogin}></Navbar>
    
    <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/order' element={<Placeorder/>} />
          <Route path='/verify' element={<Verify></Verify>} />
          <Route path='/myorders' element={<Myorder></Myorder>} />
          
    </Routes>
    <Footer></Footer>
    </div>
    </>
  )
}
