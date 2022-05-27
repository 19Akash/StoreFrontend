import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/Login.js";
import Register from './Components/Register/Register';
import { BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom"
import Cart from './Components/Cart/Cart';

function App() {

   const [user,setUser]=useState("");
   const [cartBookList,setCartBookList]=useState([]);
   const [cartItemCount,setCartItemCount]=useState();

   const handleUserData=(data)=>{
     console.log(data)
       setUser(data);
   }
   
   const cartList=(value)=>{
       let count=0;
       for(let x in cartBookList)
           {
            count=count+cartBookList[x].count
           } 
           count=count+1;
       let temp=[...cartBookList];
       let f=0;
       for(let x in temp){
          if(value.isbn13===temp[x].id)
          {
              temp[x].count=temp[x].count+1
              f=1;
              setCartBookList(temp);
              break;
          }
       }
       if(f===0)
       {
         let temp={
           id:value.isbn13,
           item:value,
           count:1
         }

         setCartBookList((e)=>[...e,temp]);
       }
       setCartItemCount(count)
   }


   const cartListS=(value)=>{
    let count=0;
    for(let x in cartBookList)
    {
     count=count+cartBookList[x].count
    } 
    count=count-1;
    let temp=[...cartBookList];
    let f=0;
    for(let x in temp){
       if(value.isbn13===temp[x].id)
       {
          if(temp[x].count>0)
          {
           temp[x].count=temp[x].count-1
           f=1;
           setCartBookList(temp);
           break;
          }
       }
    }
    setCartItemCount(count)
}
 

  return (
       <Router>
            <div className="">
              <Routes>
                  <Route path="/signup" element={<Register handleUserData={handleUserData}/>}/>
                  <Route path="/login" element={<Login handleUserData={handleUserData}/>}/>
                  <Route path="" element={<Navigate to="/Home" />} />
                  <Route path="/home" element={<Home user={user} cartList={cartList} data={cartBookList} count={cartItemCount}/>}/>
                  <Route path="/cart" element={<Cart data={cartBookList} cartList={cartList} cartListS={cartListS} count={cartItemCount}/>}/>
              </Routes> 
            </div>
       </Router>  
      
  );
}

export default App;
