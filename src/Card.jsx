
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







    {/* <button onClick={()=>{console.log(newData)}}>Click here</button> */}
        {/* <h1>{newData[0].Poster}</h1> */}

// const [data, setData] = useState([])


// useEffect(()=>{
//     getData()
//     console.log(data)
// });

// const getData=async()=>{
//     const result= await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
//     setData(result.data.abilities)
// };








// return(
//   <>

//   {data.map((item)=>(
//      <div>
//      <div className="card">

//       <img src={item.url} alt='logo'/>
//       <h2 >{item.name}</h2>

//      </div>
//   </div>



//   ))}
   
//   </>

// )

// }






// import React, { useState, useEffect } from "react";




// function TextSelectionToolbar() {
//   const [toolbarVisible, setToolbarVisible] = useState(false);
//   const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     document.addEventListener("mouseup", handleSelection);
//     return () => {
//       document.removeEventListener("mouseup", handleSelection);
//     };
//   }, []);

//   function handleSelection() {
//     const selection = window.getSelection();
//     if (selection.toString().length > 0) {
//       const range = selection.getRangeAt(0);
//       const boundingRect = range.getBoundingClientRect();
//       const x = boundingRect.left + boundingRect.width / 2;
//       const y = boundingRect.top - 50;
//       setToolbarPosition({ x, y });
//       setToolbarVisible(true);
//     } else {
//       setToolbarVisible(false);
//     }
//   }

//   function handleBoldClick() {
//     document.execCommand("bold", false, null);
//   }

//   function handleUnderlineClick() {
//     document.execCommand("underline", false, null);
//   }

//   function handleItalicClick() {
//     document.execCommand("italic", false, null);
//   }

//   return (
//     <>
//       {toolbarVisible && (
//         <div
//           className="text-selection-toolbar"
//           style={{ left: toolbarPosition.x, top: toolbarPosition.y }}
//         >
//           <button onClick={handleBoldClick}>B</button>
//           <button onClick={handleUnderlineClick}>U</button>
//           <button onClick={handleItalicClick}>I</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <TextSelectionToolbar />
//       <div contentEditable>Click here to edit text</div>
//     </div>
//   );
// }




