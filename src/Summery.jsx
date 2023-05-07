import axios from 'axios';
import React, { useEffect, useState } from 'react'
  
 

const Summery = (props) => {

    const [summeryData, setSummeryData]= useState([]);

    useEffect(() => {
    //    res()
    console.log(props.data[localStorage.getItem('token')]);
       
        
     });

    //  const res= async()=>{
    //     const result= await axios.get("https://api.tvmaze.com/search/shows?q=all")
    //     setSummeryData(result.data[localStorage.getItem('token')])
    //     console.log(result.data[localStorage.getItem('token')]);
    //      };

    
  return (
    <div className='F'   >
        <div className='stl'>

            <img className='SummeryImage' src={props.data[localStorage.getItem('token')].show.image.medium}/>
       
        <p className='sum' >
         {props.data[localStorage.getItem('token')].show.summary}
        
         <h2 className='run'>{props.data[localStorage.getItem('token')].show.status}</h2>
         <p>{props.data[localStorage.getItem('token')].show.runtime}</p>
         <p>{props.data[localStorage.getItem('token')].show.averageRuntime}</p>
         <p>{props.data[localStorage.getItem('token')].show.premiered}</p>
         <p>{props.data[localStorage.getItem('token')].show.language}</p>
         <h1>{props.data[localStorage.getItem('token')].show.genres}</h1>
         <h1><button className='btn' onClick={()=>{console.log(summeryData)}}>Book Tickets</button></h1>
            
        </p>
       
        </div>
       
      
     
      
        
        
     </div>

    
  )
}

export default Summery