import NavBar from "./components/home/NavBar"
import React from 'react'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
    
  <NavBar/>
     <Outlet/>
  
     
    
    </>
  )
}

export default App