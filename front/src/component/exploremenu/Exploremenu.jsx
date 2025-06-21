import React from 'react'
import { menu_list } from '../../assets/assets'
import './exploremenu.css'
export default function Exploremenu({category,setcategory}) {
  return (
    <div className='explore-menu' id='menu-explore'> 
    <h1 id="menu-heading">Explore our menu</h1>
      <p id="menu-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eaque officiis aut nam blanditiis ratione, dignissimos eligendi unde tempora! Pariatur incidunt nobis, iste minima eos atque quia ullam enim nemo, quo natus ut! Iure animi
         cum quas consequuntur iusto esse laudantium dolorem hic nostrum nihil.</p>
    <div id="item-list">
       {menu_list.map((item,index)=>{
          return(
            <div key={index} onClick={() => setcategory(prev => prev === item.menu_name ? "all" : item.menu_name)} className="explore-menu-item">
  <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
  <p>{item.menu_name}</p>
</div>

          )
       })}
    </div>
    </div>
  )
}
