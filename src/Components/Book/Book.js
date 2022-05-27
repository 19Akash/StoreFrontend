import React, { useEffect, useState } from 'react';
import '../Book/Book.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Book = (props) =>{
    const [click,setClick]=useState(0);

    useEffect(()=>{
        let f=0;
        for(let x in props.data)
        {
            let element=props.data[x];
             if(element.isbn13===props.item.isbn13)
             {
                f=1;
             }
        }
        if(f===1)
        {
            setClick(e=>e+1)
        }
    },[])

    const addToCartClicked=()=>{
        props.checkCount(1);
        setClick(e=>e+1)
        props.addbook(props.item);
    }
   const showToast=()=>{   
            alert("Item is already there in Cart")
    }

    return(
        
        <div className='bookCard'>
            <img src={props.item.image} alt=''></img>
            <h5>{props.item.title}</h5>
            <h4>{props.item.price}</h4>
            <div className='bookCardBtn'>
                {
                  (click===0)?
                      <h1 onClick={addToCartClicked}><i class="fa fa-shopping-cart cartbtn" aria-hidden="true"></i></h1>
                      :
                       <h1 onClick={showToast}><i class="fa fa-shopping-cart cartbtn" aria-hidden="true"></i></h1>
                      
                }
                <button>buy now</button>
            </div>
        </div>
    )
}

export default Book;