import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
export default function Footer() {
  return (
    <div className='footer-container' id='contact'>
      <div className="footer">
        <div className="left-footer">
               <div className="icon">
 <img src={assets.logo} alt="" />
               </div>
               <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cupiditate rerum. Saepe nostrum commodi voluptatibus nesciunt neque nemo harum. Eos aliquid saepe cumque corrupti iusto earum ut! Reiciendis quisquam laboriosam quos corporis animi totam illum pariatur at. Enim minima quod unde consectetur nesciunt ratione non perspiciatis error et, porro veritatis molestiae quasi totam, ab magnam est, beatae voluptas 
               laboriosam nostrum. Commodi vero ipsum vel dolor quod quaerat.</p></div>
               <div className="icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
               </div>
        </div>
        <div className="centre-footer">
<h3>Company</h3>

    <ul>
        <li>home</li>
        <li>about us</li>
        <li>delivery</li>
        <li>privacy policy</li>
    </ul>

        </div>
        <div className="right-footer">
           <div className="headr">
             <h3>Get In touch</h3>
             <p>1+49999999</p>
             <p>tomato@gmail.com</p>
           </div>
        </div>
      </div>
      <div className="hrr">
        <hr />
      </div>
      <div className="copyright">
 <p>copyright 2025 @ tomato.com all right reserverd</p>
      </div>
    </div>
  )
}
