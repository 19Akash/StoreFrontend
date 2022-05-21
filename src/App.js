import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/Login.js";
import Register from './Components/Register/Register';

import { BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom"

function App() {

   const [user,setUser]=useState("");
   const handleUserData=(data)=>{
     console.log(data)
       setUser(data);
   }
  return (
       <Router>
            <div className="">
              <Routes>
                  <Route path="/signup" element={<Register handleUserData={handleUserData}/>}/>
                  <Route path="/login" element={<Login handleUserData={handleUserData}/>}/>
                  <Route path="" element={<Navigate to="/signup" />} />
                  <Route path="/home" element={<Home user={user}/>}/>
              </Routes> 
            </div>
       </Router>  
      
  );
}

export default App;
