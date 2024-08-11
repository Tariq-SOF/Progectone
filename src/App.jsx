import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SingUp from './SingUp'
 import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Lodingpage from './Lodingpage'
import Content from './Componets/Content'




function App() {

  return (
    <>

      
 <Routes>

       <Route path="/" element={<Lodingpage />} />
          <Route path="/Lodingpage" element={<Lodingpage />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Login" element={<Login />} />
   </Routes> 

    </>
  )
}

export default App
