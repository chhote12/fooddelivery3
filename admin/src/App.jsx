import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Addfood from './pages/addfood/Addfood'
import Foodlist from './pages/foodlist/foodlist'
import Orderlist from './pages/orderlist/Orderlist'
import './App.css'
import { ToastContainer } from 'react-toastify';
export default function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>

      <div className='container-app'>
      <div className="a1">
      <Sidebar></Sidebar>
      </div>
      <div className="a2">
      <Routes>
      <Route path='/' element={<Addfood />} />
<Route path='/food' element={<Foodlist />} />
<Route path='/orderlist' element={<Orderlist />} />

      </Routes>
      </div>
      </div>
      


    </div>
  )
}
