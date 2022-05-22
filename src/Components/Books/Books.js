import React, { useEffect,useState } from 'react';
import Book from '../Book/Book.js';
import '../Books/Books.css';

const Books = (props)=>{
    const[data,setData]=useState("");

     useEffect(()=>{
         if(props.booksData)
         {
             setData(props.booksData);
             console.log(data);
         }
     })
    return(
        <div className='books'>
            { (data!=="")?
               <div className='booksView'>
                    {
                        data.map((e)=>{
                        return (
                        <Book item={e}/>
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