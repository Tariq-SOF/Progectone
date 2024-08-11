import React, { useState, useEffect } from "react";
import axios from "axios";

function Content() {
    const [getapi, setgetapi] = useState([]);
    const [getsupment, setsupment] = useState([]);
    const resoletContents =  localStorage.getItem("submissionContent")

     useEffect(()=>{

        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=RwmReEiR4sAzNzK3QsJRFcnMAfTyDQDV`)   
        
        .then(response => setgetapi(response.data.results.books))
        .catch(error => console.error(error));


    },[getsupment])


// https://6552c0675449cfda0f2dca61.mockapi.io/resuers
  return(<>
{resoletContents == "true" ? (

  <div className="flex flex-wrap w-full h-auto gap-14">
    
<p className="text-center w-full m-10 font-bold text-2xl text-black">BOOKS'</p>

    
     {getapi.map(item => (
<div className="w-[28%] max-sm:w-[35%] bg-[#fff] p-5 ml-5 rounded-md shadow-2xl grid justify-items-center content-between h-[65vh] max-sm:h-[38vh] text-center" key={item.rank}>
   
        <div className=" flex flex-col items-center gap-5 max-sm:gap-2" >

            

      <img  className="w-[25vh] max-sm:w-[10vh] shadow-2xl rounded-2xl" src={item.book_image}/>
      <p className="font-bold text-xl max-sm:text-sm">{item.title}</p> 
      <button className="w-[12vh] p-1.5 bg-[#000000] rounded-md text-white max-sm:text-sm">Click</button>

        </div>
         </div>
        
    ))}

</div>

):(


 <div className="w-full h-[30vh] flex flex-col ">
        <h1 className="font-bold m-6 text-3xl text-center ">Wolcom</h1>
        <h3 className="font-bold leading-2.5 text-center text-xl" >"Discover our incredible online libraries<br/>Expand your knowledge and enrich your life. Start exploring today!"</h3>
    </div>




)} 






  
  
  
  
  

  
  
  </>)
}

export default Content;




