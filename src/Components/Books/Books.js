import React, { useEffect,useState } from 'react';
import Book from '../Book/Book.js';
import '../Books/Books.css';

const Books = (props)=>{
    const[data,setData]=useState(props.booksData);

    return(
        <div className='books'>
            { 
            (data!=="")?
               <div className='booksView'>
                    {
                        data.map((e)=>{
                        return (
                        <Book item={e} addbook={props.bookList} checkCount={props.checkCount} data={props.data}/>
                        );  
                        })
                    }
                </div>
                :console.log("Not getting data")
            }
        </div>
    )
}

export default Books