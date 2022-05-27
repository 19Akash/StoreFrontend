import React, { useEffect, useState } from 'react';
import '../CartItem/CartItem.css'

const CartItem =(props)=>{
    const [totalItemPrice,setTotalItemPrice]=useState(0)
    let totalPrice=0;

    const handleP = () =>{
       
        props.cartList(props.item.item)
        let price=parseFloat(props.item.item.price.substring(1));
        setTotalItemPrice((e)=>(props.item.count+1)*price);
    }
    const handleS = () =>{
       
        props.cartListS(props.item.item)
        let price=parseFloat(props.item.item.price.substring(1));
        setTotalItemPrice((e)=>(props.item.count-1)*price);    
    }
    
    (()=>{
        if(props.item.length!==0)
        {
        let price=parseFloat(props.item.item.price.substring(1));
        totalPrice=props.item.count*price
        }
    })();

    return(
        <div className='cartItem'>
           <img className='img' src={props.item.item.image} alt='itemImage'/>
           <div className='bookname'>Name: {props.item.item.title} </div>
           <div className='qntbtn'>
               <button onClick={handleP} className='qntbtnp'>+</button>
               <input className='qntbtninput' type="text" value={props.item.count}/>
               <button onClick={handleS} className='qntbtns'>-</button>
           </div>
           <div className='price'>
              <div className='textPrice'>Price:$</div>
              <div className='totalPrice'>{totalPrice.toFixed(2)}</div>
           </div>
        </div>
    )
}

export default CartItem