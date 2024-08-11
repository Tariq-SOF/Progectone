import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react"
import bookIcon from "./Animation/AnimationBook.json"


function Login() {
const navigate = useNavigate();
const [Username, setUsername] = useState();
const [Usernameerro, setUsernameerro] = useState();

const [Passworderro, setPassworderro] = useState();
const [Password, setPassword] = useState();

    const handelSubment =()=> {
      if(Username?.length < 4){
        setUsernameerro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>User name must be at least 4 characters</span>)

      } else if (!/^[a-zA-Z0-9]+$/.test(Password) || Password?.length < 6){
        setPassworderro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>Password must be at least 6 characters <p/> and contain only letters and numbers</span>);

      } else {
        axios.get("https://669b7915276e45187d3593df.mockapi.io/sigin2")
        .then(res => { 
          const users = res.data.find(user =>
            user.Username === Username && user.Password === Password
           )
           if(users) {
            localStorage.setItem("submission","true")
            localStorage.setItem("submissionContent","true")
          navigate("/Lodingpage")
           }else {
            setPassworderro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>Invalid username or password</span>);
          }
         })
      }
    }
  return (<>
 
  {/* the Page container */}
  <div className="w-full h-[100vh]  max-sm:w-auto max-sm:h-[88vh]  flex justify-center items-center bg-[#e5e5e66c]  ">

    {/* the Contents container */}
    <div className="w-[75%] h-[60vh]  max-sm:w-[70%] max-sm:h-[60vh] max-sm:text-sm  flex bg-gradient-to-b from-[#4c5ac5007] to-[#17467244] rounded-2xl   border ">

      {/* the Image contents */}
        <div className=" w-[60%] h-[60vh]  max-sm:w-[0%]  max-sm:h-[0%] bg-[url('Screenshot.png')] bg-cover bg-center max-md:hidden rounded-2xl">
            <div className=" w-[full] max-sm:w-[0%]  max-sm:h-[0%] ">
    <Lottie 
    animationData={bookIcon}
    loop={0}
     
     />
            </div>
        </div>

        {/* Registration card container */}
         <div className="w-[80%] h-[50vh] bg-gradient-to-b from-[#4c5ac509] to-[#4592da10] font-semibold border-l  max-sm:w-[95%] max-sm:h-[58vh] rounded-2xl flex items-center flex-col justify-evenly ">

          {/* Registration description */}


          {/* Username input */}
          <div className="w-full h-auto flex flex-col items-center">
          <div className="  w-auto ">
            <label htmlFor="username" className="block max-sm:text-sm text-lg font-bold text-[18px] text-[#110510a4]">Username</label>
            <input type="text" id="username" name="username" className=" p-2 w-[35vh] max-sm:w-[20vh]  h-[5vh] text-[12px] mt-2  rounded-md border-[1px] shadow-sm placeholder:text-[11px]" value={Username}
                     onChange={(e) => {
                setUsername(e.target.value);
              }} placeholder="Enter the Username"/>
          </div>  
          {Usernameerro}
          </div>

          {/* Password input */}
          <div className="w-full h-auto flex flex-col items-center">
          <div className="w-auto">
            <label htmlFor="password" className="block max-sm:text-sm text-lg font-bold text-[18px] text-[#110510a4]">Password</label>
            <input type="password" id="password" name="password" className=" p-2 w-[35vh] h-[5vh] max-sm:w-[20vh] text-[12px] mt-2  rounded-md border-[1px] shadow-sm placeholder:text-[11px] " value={Password}
                     onChange={(e) => {
                setPassword(e.target.value);
              }}
            placeholder="Enter the password" />
          </div>
          {Passworderro}
          </div>

          {/*  Submit button */}
          <div className=" max-sm:mb-0 w-auto h-auto flex flex-col items-center justify-evenly gap-4  ">
           <button type="submit"  onClick={handelSubment} className="w-[35vh] h-[5vh]  max-sm:w-[100%] max-sm:text-sm  max-sm:h-[6vh] max-sm:p-2  rounded-md bg-[#fbf429]  shadow-md text-[15px] transition duration-500 hover:bg-[#faf4509e]">
            Login
            </button>
            <Link to="/SingUp"> <button type="submit" className="w-[35vh] h-[5vh]  max-sm:w-[100%] max-sm:text-sm  max-sm:h-[6vh] max-sm:p-2  rounded-md bg-[#fbf429]  shadow-md text-[15px] transition duration-500 hover:bg-[#faf4509e]">
            Create an account
            </button></Link>
          </div> 
        </div>
    </div>

</div>
  
  </>);
}

export default Login;
