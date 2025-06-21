import React, { useContext } from 'react'
import './fooditem.css'
import rating from '../../assets/rating_starts.png'
import add_icon_white from '../../assets/add_icon_white.png'
import removeicon from '../../assets/remove_icon_red.png'
import addgreen from '../../assets/add_icon_green.png'
import { Storecontext } from '../../context/Storecontext'
export default function Fooditem(props) {
   
    const {caritem,addtocart,removetocart,url}=useContext(Storecontext)
  return (
    <div className='food-item'>
      <div className="image-cointner">
        <img  className='image' src={url+"/images/"+props.image} alt="" />
       {!caritem[props.id]?<img className='whitebtn' src={add_icon_white} onClick={()=>addtocart(props.id)}></img>:
       <div className="counter">
        <img src={addgreen} alt=""  onClick={()=>addtocart(props.id)} />
        <p>{caritem[props.id]}</p>
        <img src={removeicon} alt=""  onClick={()=>removetocart(props.id)}/>
       </div>

       }
      </div>
      <div className="name-rating">
        <div className="name">
   <h3>{props.name}</h3>
        </div>
        <div className="rating">
             <img src={rating} alt="" />
        </div>
      </div>
      <div className="discription">
        {props.description}
      </div>
      <div className="price"><h3>{props.price}$</h3></div>
    </div>
  )
}
