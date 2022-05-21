import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css"
import axios from 'axios';

const Register =(props)=>{
    const navigate = useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:'',
        password:'',
        reEnterPassword:''
    })
    const [response,setResponse]=useState('')

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setUser({
            ...user,
            [name] : value
         })

    }
    const register= async ()=>{
       const {name ,email, password, reEnterPassword} = user; 
       if(name && email && password && (password===reEnterPassword))
       {
           await axios.post("http://localhost:1000/auth/signup",user)
           .then(res=>{
                if(res.data.data)
                {
                  props.handleUserData(res.data.data);
                  navigate('/home');
                }
                else if(res.data.message)
                {
                    alert("User is already created")
                    navigate('/login');
                }
           }); 
       }
       else
       {
        alert("Invalid input");
       }   
    }

    const login=()=>{
        navigate('/login');
    }



    return(
        <div className='register'>
            <h1>Register</h1>
            <input className="registerinput" type="text" name="name" value={user.name} placeholder='Enter your name' onChange={handleChange}></input>
            <input className="registerinput" type="text" name="email" value={user.email} placeholder='Enter your email' onChange={handleChange}></input>
            <input className="registerinput" type="password" name="password" value={user.password} placeholder='Your password' onChange={handleChange}></input>
            <input className="registerinput" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter password' onChange={handleChange}></input>
            <button className="button" onClick={register}>Register</button>
            <div>or</div>
            <button className='button' onClick={login}>Login</button>
        </div>
        
    )
}

export default Register;