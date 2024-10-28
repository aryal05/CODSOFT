import React from 'react'

const Section = () => {
  return (
    <>
      <div className='border-black m-3 border-2 bg-amber-100 w-96 h-1/4 bg-opacity-15 flex justify-center rounded-2xl'>
        <div className=''>
          <h1 className='underline decoration-slate-700 px-4 py-2'>Service Section</h1>
        </div>
      
      </div>
      <div className='border-black m-3 border-2 bg-amber-100 w-96 h-[500px] bg-opacity-15 flex rounded-2xl'>
        <h1 className='m-4'>Section Menu</h1>
        
        <div className='flex m-10 justify-center'> 
    <ul>
      
    <li> section list</li>
    <li> section Items</li>
    <li> section Decoration</li>
    <li> section End</li>
    </ul>
        
        </div>
      </div>
     
    </>
  )
}

export default Section;
``