import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Cart/Cart.css'
import CartItem from '../CartItem/CartItem';

const Cart = (props) =>{
    
    return(
        <div>
            <div className='cartNav'>
                <div className='carticon'>
                    <i class="fa fa-shopping-cart fa-5x cartbtn" aria-hidden="true"></i>
                </div>
                <h2>My Shoping Cart <span>{props.count}</span> items </h2>  
                <div className='navcurr'>
                    <h3>Currency</h3>
                    <h3>INR</h3>
                </div>
            </div>
            <div>
                {
                    (props.data.length!==0)?
                    <div className='itemCartBorder'>
                        <div className='item'>
                            {
                                props.data.map((item)=>{ 
                                    return <CartItem item={item} cartList={props.cartList} cartListS={props.cartListS}/>
                                })
                            }  
                        </div>
                    </div>
                    : 
                    <div className='noItemCartBorder'>
                         <div className='noItemContent'>
                            <h3>Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store.</h3>
                            <h3>When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price,</h3>
                            <h3>displayed on their product pages.</h3>
                            <h3>Please <a href='/home'>Click here </a>to continue shopping</h3>
                        </div>
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart