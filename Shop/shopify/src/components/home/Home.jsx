import React from 'react'

const Home = () => {
  return (

    <div className='flex items-center justify-around bg-slate-300 leading-10'>

        <div className=' hover:bg-slate-500 hover:bg-opacity-10 transition duration-200 ease-in-out hover:scale-90 hover:cursor-pointer'>
            <h1>Top Rated

            </h1>
            
              <li>Machu Picchu, Peru – Ancient Incan city set high in the Andes mountains.</li>
              <li>Great Barrier Reef, Australia – The world’s largest coral reef system.</li>
              <li>Santorini, Greece – Famous for stunning sunsets and whitewashed buildings.</li>
              <li>Grand Canyon, USA – A natural wonder with breathtaking views.</li>
              <li>Iceland – Known for its glaciers, waterfalls, and Northern Lights.</li>
              <li>Paris, France – Iconic landmarks such as the Eiffel Tower and the Louvre Museum.</li>
            
        </div>

        <div className=' hover:bg-slate-500 hover:bg-opacity-10 transition duration-200 ease-in-out hover:scale-90 hover:cursor-pointer' >
            <h1>Items To Display
            </h1>
            <li>Place Name</li>
              <li>Location</li>
              <li>Image</li>
              <li>Short Description</li>
              <li>Best Time To Visit</li>
              <li>Fun Facts</li>
        </div>

        <div className=' hover:bg-slate-500 hover:bg-opacity-10 transition duration-200 ease-in-out hover:scale-90 hover:cursor-pointer'>
            <h1>Things to buy.
                

            </h1>
            <li>Souvenirs</li>
              <li>Local HandCrafts</li>
              <li>Clothing</li>
              <li>Jewelry</li>
              <li>ArtWorks</li>
              <li>Toys For Children</li>
        </div>

    </div>

    
  )
}

export default Home
