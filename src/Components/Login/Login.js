import axios from 'axios';
import React ,{useState} from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';


const Login =(props)=>{

        const navigate=useNavigate();
        const [user,setUser]=useState({
            email:'',
            password:'',
        })
    
        const handleChange=(e)=>{
            const {name,value}=e.target;
            setUser({
                ...user,
                [name] : value
             })
    
        }
        const login = async ()=>{
            const {email,password}=user;
            if(email && email && password && password)
            {
                await axios.post("http://localhost:1000/auth/signin",user)
                .then(res=>{
                    if(res.data.data)
                    {
                        props.handleUserData(res.data.data);
                        navigate('/home');
                    }
                    else if(res.data.message){
                        alert(res.data.message)
                    }
                });
            }
            else{
                alert("Invalid Input");
            }

        }
        const register=()=>{
            navigate('/signup')
        }
        
    return(
        <div className='login'>
            <h1>Login</h1>
            <input className="logininput" type="text" name="email" value={user.email}  placeholder='Enter your email' onChange={handleChange}></input>
            <input className="logininput" type="password" name="password" value={user.password}  placeholder='Enter your password' onChange={handleChange}></input>
            <button className="button" onClick={login}>Login</button>
            <div>or</div>
            <button className='button' onClick={register}>Register</button>
        </div>
        
    )
}

export default Login;