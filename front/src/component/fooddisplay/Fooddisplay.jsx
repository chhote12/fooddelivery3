import React, { useContext } from 'react'
import './fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'
export default function Fooddisplay({category}) {
const {food_list}=useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You {category}</h2>
       

        <div id="item-list">
            {food_list.map((item,index)=>{
                if(category==="all"|category===item.category){
                    return <Fooditem key={index} name={item.name} price={item.price} id={item._id} image={item.image} description={item.description} category={item.category}></Fooditem>
                }
            
            })}
        </div>
        
    
    </div>
  )
}
