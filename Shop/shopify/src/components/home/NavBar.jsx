import React from 'react'

const NavBar = () => {
  return (

       <div className='flex justify-around items-center bg-gray-900 text-white h-10'>
        <ul className='flex space-x-10'>
            <li className='hover:bg-green-400 hover:underline rounded-sm transition duration-200 ease-in-out'><a href="/">Home</a></li>
            <li className='hover:bg-green-400 hover:underline rounded-sm transition duration-200 ease-in-out'><a href="/section">Section</a></li>
            <li className='hover:bg-green-400 hover:underline rounded-sm transition duration-200 ease-in-out'><a href="#">Blog</a></li>
            <li className='hover:bg-green-400 hover:underline rounded-sm transition duration-200 ease-in-out'><a href="#">Contact</a></li>   
        </ul>
       </div>
      
    
  )
}

export default NavBar
