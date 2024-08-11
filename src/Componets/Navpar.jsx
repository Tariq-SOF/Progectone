import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Navpar() {
    const navigetgout = useNavigate()
    const valuenav = localStorage.getItem("submission","true")

    const handelGout =()=>{
      localStorage.setItem("submission","")
      localStorage.setItem("submissionContent","")
      window.location.reload()
    }

  return(<>
  
  <nav className="m-0 w-full h-[12vh] max-sm:h-[11vh] bg-[#07040437] flex justify-between items-center" >
        <h2 className="text-gray-50 p-2 text-xl font-semibold cursor-pointer hover:text-2xl max-sm:hover:text-lg duration-75 max-sm:text-sm "  >BOOKs'</h2>
        <ul className="m-0 w-[20%] flex flex-row justify-end p-2 " >
            
{valuenav == "true" ? (
    <div  className="flex gap-4 ">

        <li><h2 className="text-gray-50 p-2 max-sm:text-sm" >Favorite</h2> </li>
        <li><h2 className="text-gray-50 p-2 max-sm:text-sm" >Read</h2> </li>
        <li> <button
  onClick={handelGout}
  className="py-2 px-4 max-sm:px-2 bg-white/30 text-white rounded-md shadow-md cursor-pointer hover:bg-white/50 duration-600 max-sm:text-sm"
>
  Logout
</button></li>
 </div>
):(

<div className="flex gap-4">
    <Link to="/SingUp"><li> <button className="py-2 px-4 max-sm:px-2 bg-white/30 text-white rounded-md shadow-md cursor-pointer hover:bg-white/50 transition-colors duration-300 max-sm:text-sm">Signup </button></li></Link>
    <Link to="/Login"><li> <button className="py-2 px-4 max-sm:px-3 bg-white/30 text-white rounded-md shadow-md cursor-pointer hover:bg-white/50 transition-colors duration-300 max-sm:text-sm">Login</button> </li></Link>
           </div>
)}</ul>
           
        </nav>
  
  </>)
}

export default Navpar;
