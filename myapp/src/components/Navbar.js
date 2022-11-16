import React from 'react'
import {IoIosPerson} from 'react-icons/io'
import {MdNotifications} from 'react-icons/md'

function Navbar() {
  return (
    <div className='row  '>
      
  <div class="d-flex justify-content-end">
  <MdNotifications className='mx-4 cursor-pointer' style={ {cursor: "pointer"}} size={20}/>
    <IoIosPerson  className='mx-3 cursor-zoom-in' style={ {cursor: "pointer"}} size={20}/></div>
        
        
    </div>
  )
}

export default Navbar