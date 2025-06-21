
import React, { useState } from 'react'
import './home.css'
import Header from '../header/Header'
import Exploremenu from '../../component/exploremenu/Exploremenu'
import Fooddisplay from '../../component/fooddisplay/Fooddisplay';

export default function Home() {
    const[category,setcatagory]=useState("all");
  return (
    <div className='home'>
      <Header></Header>
      <Exploremenu  category={category} setcategory={setcatagory}></Exploremenu>
      <Fooddisplay category={category} ></Fooddisplay>
      
    </div>
  )
}
