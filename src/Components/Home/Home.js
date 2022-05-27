import React, { useEffect, useState } from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import Books from '../Books/Books.js';
import axios from 'axios';

const Home =(props)=>{
     const navigate = useNavigate();
     const [username,setUsername] = useState("User")
     const [userDrop,setUserDrop] = useState("none");
     const [userFlag,setUserFlag] = useState("false");
     const [booksData,setBooksData]=useState("");
     const [cartCount,setCartCount]=useState(0);
     

     useEffect(()=>{ 
         console.log(props.data)
         if(booksData==="")
         {
              async function fetchData(){
               await axios.request(`https://api.itbook.store/1.0/search/new`)
                .then(res=>{ 
                        setBooksData(res.data.books);
                })
            }
            fetchData();
         }

         if(props.user)
         {
          setUsername(props.user.name);
         }
         else{
             setUsername("User")
         }
         },[])



   const  handleFilter = async (value)=>{
        let data="";
            await axios.request(`https://api.itbook.store/1.0/search/${value}`)
             .then(res=>{ 
                     data=res.data.books;
                    
             })
             setBooksData(data);
         }
    
    const checkCount=(value)=>{
          setCartCount(c=>c+value)
     }


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

    const handleCartClick=()=>{
         navigate('/cart');
    }

    return(
        <div>
            {
                console.log(booksData)
            }
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
                    <h1 onClick={handleCartClick}><i class="fa fa-shopping-cart cartbtn" aria-hidden="true"></i></h1>
                    {
                       (props.count)? 
                       <div className='itemcount'>
                            <h6>{props.count}</h6>
                        </div> 
                        :""
                    }
                </div> 
            </div>
            <div className='navbar'>
                <h1><i class="fa fa-bars" aria-hidden="true"></i></h1>
                <h3 onClick={()=>handleFilter("new")}><i>New Arrival</i></h3>
                <h3 onClick={()=>handleFilter("award")}>Award Winning</h3>
                <h3 onClick={()=>handleFilter("science")}>Science</h3>
                <h3 onClick={()=>handleFilter("story")}>Story</h3>
                <h3 onClick={()=>handleFilter("fiction")}>Fiction</h3>
            </div>
            <div className='books'>
                {
                    (booksData!=="")? <Books  booksData={booksData} bookList={props.cartList} checkCount={checkCount} data={props.data}/> : ""
                }   
            </div>               
        </div>
    )
}

export default Home;