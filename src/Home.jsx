import React from "react";


function Home() {

  return(<>
    <div className="w-full h-screen" >
    <div className="w-full h-[50vh] bg-[url('https://images.pexels.com/photos/2075670/pexels-photo-2075670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]" >
    <div className="w-full h-screen bg-[#00000028]" >
        <Navpar/>
    </div>
    </div>

    <div className="w-full h-[40vh] flex flex-col items-center justify-center">
        <h1 className="font-semibold " >Wolcom</h1>
        <h3 className="font-bold leading-2.5 text-center" >"Discover our incredible online libraries<br/>Expand your knowledge and enrich your life. Start exploring today!"

</h3>
    </div>
    </div>
  
  
  
  </>);
}

export default Home;
