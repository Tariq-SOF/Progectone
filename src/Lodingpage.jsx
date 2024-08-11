import React from "react";
import Navpar from "./Componets/Navpar";
import Content from "./Componets/Content";
 

function Lodingpage() {
  // localStorage.setItem("sunbment","ads")

  // localStorage.setItem("sunbment",true)
  return(<>
  <div className=" shadow-2xl rounded-xl w-full h-[60vh] max-sm:h-[40vh] bg-[url('https://images.pexels.com/photos/2075670/pexels-photo-2075670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
    <div className="shadow-2xl rounded-xl  w-full h-[60vh] max-sm:h-[40vh] bg-[#1f1e1d72]" >
         <Navpar/>
         <div className="w-full h-[30vh] flex justify-center items-center">
    <h3 className="font-bold leading-10 text-center text-lg text-gray-300 mt-6 max-sm:text-sm" >"Embark on your journey in the world of knowledge by expanding<br/>  your horizons, developing your skills,and finding entertainment with our global library"</h3>
    </div>
    </div>
    </div>

   <Content/>
  
   
  
  
  
  </>);
}

export default Lodingpage;
