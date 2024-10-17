import React from 'react'

const NavBar = () => {
  return (

       <div className='flex justify-around items-center bg-gray-900 text-white h-10'>
        <ul className='flex space-x-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Section</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>   
        </ul>
       </div>
      
    
  )
}

export default NavBar
