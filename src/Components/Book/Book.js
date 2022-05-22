import React from 'react';
import '../Book/Book.css'

const Book = (props) =>{

    return(
        <div className='bookCard'>
            <img src={props.item.image} alt=''></img>
            <h5>{props.item.title}</h5>
            <h4>{props.item.price}</h4>
            <div className='bookCardBtn'>
                <h1><i class="fa fa-shopping-cart cartbtn" aria-hidden="true"></i></h1>
                <button>buy now</button>
            </div>
        </div>
    )
}

export default Book;