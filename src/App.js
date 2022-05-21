import React, { useEffect } from 'react';
import './App.css';
import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/Login.js";
import Register from './Components/Register/Register';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom"

function App() {

  return (
       <Router>
            <div className='App'>
              <Routes>
                  <Route path="/signup" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="" element={<Navigate to="/signup" />} />
                  <Route path="/home" element={<Home/>}/>
              </Routes> 
            </div>
       </Router>  
      
  );
}

export default App;
