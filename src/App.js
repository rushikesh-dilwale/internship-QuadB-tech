import React, { useEffect, useState } from "react";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./HomePage";
import Summery from "./Summery";
import axios from "axios";



const App = () => {
 
  const [newData,  setnewData] = useState([])

  useEffect(() => {
      getData()
      
   });
   
const getData=async()=>{
  const result= await axios.get("https://api.tvmaze.com/search/shows?q=all")
  
  setnewData(result.data)
  // console.log(result.data)
}

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/Summery" element={< Summery data={newData} />}/>
    <Route exact path="/" element={<Homepage/>}/>
  
    </Routes>
    </BrowserRouter>
    

    </> 
    
  )

}
export default App 