import React from 'react'
import { Link } from 'react-router-dom'
import cowin from './Images/cowin.png'


const Headerb = () => {
  return (
    <div className='flex bg-gray-600 w-full px-5 py-4'>
    <div className='grow'>
      <Link to="/"> <img src={cowin} alt="" className='w-40' /></Link> 
    </div>
    <div className='flex gap-20  pt-4'>
  <Link to="/Ddashboard"> <div className='text-white hover:text-yellow-500 font-bold'>
        Dashboard
    </div></Link> 
    <div className='text-white hover:text-yellow-500 font-bold'>
        Verify Certificate
    </div>
    <div className='text-white hover:text-yellow-500 font-bold'>
        FAQ
    </div>
  <Link to="/partner"> <div className='text-white hover:text-yellow-500 font-bold'>
        Partners
    </div></Link> 
    <div className='text-white hover:text-yellow-500 font-bold '>
      <Link to="/login"> <button className='border-2 border-white px-7 rounded-full  py-2'>
        Register/SignIn

        </button></Link> 
    </div>

    </div>
      
    </div>
  )
}

export default Headerb
