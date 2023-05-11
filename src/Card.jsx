
import React,{ useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Summery from './Summery'



const Card = () => {
 
    const [newData,  setnewData] = useState([])

    useEffect(() => {
        getData()
        
     });


     
 const getData=async()=>{
    const result= await axios.get("https://api.tvmaze.com/search/shows?q=all")
    
    setnewData(result.data)
    // console.log(result.data)
 }


 
    const navigate = useNavigate();

    const change=(idx)=>{
        // console.log(idx,"ddddddddddddddddddddddddd");
        localStorage.setItem('token',idx)
        navigate("/Summery" )
 };
  return (
    <>
    <div className='cardSection'>
        
       {newData.map((item,idx=0)=>(
            <div className="card">
      <img className='Rushi' src={item.show.image?.medium} alt="Avatar" style={{"width":"100px"}}/>
      <div className="container">
        <h4><b>{item.show.name}</b></h4> 
        <p>{item.show.type}</p>
        {/* <h1>{idx}</h1>  */}
        <button onClick={()=>change(idx)}>summery</button>
      </div> 
    </div> 
     ))} 
         
      

    </div>
    </>
  )
  }

    export default Card;























