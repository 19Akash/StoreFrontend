import React, { useEffect, useState } from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { BsSearch } from "react-icons/bs";

const Home =(props)=>{
     const navigate = useNavigate();
     const [username,setUsername] = useState("User")
     const [itemCount,setItemCount] = useState(0)
     const [userDrop,setUserDrop] = useState("none");
     const [userFlag,setUserFlag] = useState("false");



     useEffect(()=>{
         if(props.user)
         {
          setUsername(props.user.name);
         }
         else{
             setUsername("User")
         }
     },[username])


     const handleLogout=()=>{
        navigate('/login')
    }
    const handleUserClick=()=>{

        if(username==="User")
        {
            navigate('/login')
        }
        else
        {
            if(userFlag==="true")
            {
                setUserFlag("false");
                setUserDrop("none");
            }
            else{
                setUserFlag("true");
                setUserDrop("block")
            }
        }
    }

    return(
        <div>
            <div className='header'>
                <img src={logo} alt='logo'/>
                <div className="search">
                    <input  className="searchfield" type = "text"  placeholder='Search by Title, Auther, Publiser' name='searchfield'></input>
                    <button className="fa fa-search btn"></button>
                </div>
                <h3>Hello, {username}</h3>
                 <div className='userIconDrop'>
                   <h1 onClick={handleUserClick}><i className="fa fa-user userbtn" aria-hidden="true"></i></h1>
                   {
                        (userFlag==="true" && username!=="User")?
                        <div style={{"display":{userDrop}}} className="dropup-content">
                            <li href="#">My Profile</li>   
                            <li href="#">DashBoard</li>
                            <li onClick={handleLogout}>Logout</li>
                        </div>
                        : ""
                   }
                </div> 
                <div style={{"display":"flex"}}> 
                    <h1><i class="fa fa-shopping-cart cartbtn" aria-hidden="true"></i></h1>
                    {
                       (itemCount!==0)? 
                       <div className='itemcount'>
                            <h6>{itemCount}</h6>
                        </div> 
                        : ""
                    }
                </div> 
            </div>
           
        </div>
    )
}

export default Home;