import React from 'react'
import Dropdown from './Dropdown'
import emblem from './Images/emblem.png'

const Header = () => {
  return (
    <>
    <div className='flex bg-gray-400 py-2 px-5'>
    <div className='flex'>
    <img src={emblem} alt="" className='w-10 h-10' />
       <p className='pl-2 text-white'>Ministry of health and <br />welfare Department</p> 
    </div>
    <div className='ml-auto'>
        {/* <p>English</p> */}
        <Dropdown/>
        


    </div>
    

    </div>
    </>
  )
}

export default Header
