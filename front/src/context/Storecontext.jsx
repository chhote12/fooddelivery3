import React, { createContext, useState } from 'react';

import { useEffect } from 'react';
import axios from 'axios'

export const Storecontext = createContext(null);
const url="https://fooddelivery3-1.onrender.com";
const StorecontextProvider = (props) => {
    const [caritem,setcartitem]=useState({});
    const [food_list,setfood_list]=useState([]);
    //const[token,settoken]=useState("");
    const [token, settoken] = useState(() => localStorage.getItem("token") || "");

  // 2. Debug: Log token changes
  useEffect(() => {
     fetchfoodlist();
    console.log("Token in context:", token); // Check if updates correctly
  }, [token]);

  // 3. Optional: Sync token across browser tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "token") {
        settoken(e.newValue || "");
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

    const addtocart=async(itemid)=>{
         if(!caritem[itemid]){
            setcartitem((prev)=>({...prev,[itemid]:1}));
         }
         else{
            setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
         }
         if(token){

           const result= await axios.post(url+"/api/cart/add",{itemId:itemid},{headers:{token}})
           console.log(result.data.success,result.data.message);
         }
    }
    const removetocart=async(itemid)=>{
        setcartitem((pre)=>({...pre,[itemid]:pre[itemid]-1}))

        if(token){
           const result= await axios.post(url+"/api/cart/remove",{itemId:itemid},{headers:{token}})
           console.log(result.data.success,result.data.message)
        }
    }
    useEffect(() => {
      console.log(caritem)
    
     
    }, [caritem])
    
  
    const fetchfoodlist=async()=>{
        const result= await axios.get(url+"/api/food/list")
        setfood_list(result.data.data);
    }
const loadcartdata=async(token)=>{
const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
setcartitem(response.data.cartData)
}
    useEffect(() => {
     async function loaddata(){
        await fetchfoodlist();
        console.log(food_list)
        if(localStorage.getItem("token")){
            console.log(localStorage.getItem("token"),"this is token from context")
            settoken(localStorage.getItem("token"))
           await loadcartdata(localStorage.getItem("token"))

          }

    }

    loaddata() 
     
    }, [])
    
    const totalamount=()=>{
        let totalAmount=0;
        for(const item in caritem){
            if(caritem[item]>0){
                let info=food_list.find((product)=>product._id===item);
              totalAmount+=info.price*caritem[item];
            }
        }
        return totalAmount;
    }
    const contextvalue = {
        // context values here
        totalamount,
        caritem,
        setcartitem,
        addtocart,
        removetocart,
        food_list,
        url,
        token,
        settoken
    };

    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    );
};

export default StorecontextProvider;
