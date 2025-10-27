import React from 'react'
import Navbar from '../components/Navbar'
import Foooter from '../components/Foooter'

function Layout({children}) {
  return (
    <div >
         <Navbar/>
    
       <div className='w-[95%] m-auto'>
      { children}
       </div>
       <Foooter/>
    </div>
  )
}

export default Layout
