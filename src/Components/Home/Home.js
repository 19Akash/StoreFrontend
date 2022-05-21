import React from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home =()=>{
     const navigate = useNavigate();
    const handleLogout=()=>{
        navigate('/login')
    }
    return(
        <div className='homePage'>
            <h1>Welcome Homepage!</h1>
            <div className='button' onClick={handleLogout}>Logout</div>
        </div>
    )
}

export default Home;