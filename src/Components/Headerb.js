import React from 'react'
import { Link } from 'react-router-dom'
import cowin from './Images/cowin.png'


const Headerb = () => {
  return (
    <div className='flex flex-col md:flex-row bg-gray-600 w-full px-5 py-4 overflow-hidden'>
    <div className='md:grow flex'>
    <div className='grow '>
      <Link to="/"> <img src={cowin} alt="" className='w-40' /></Link> 
    </div>
    <div className=' md:hidden text-white hover:text-yellow-500 font-bold '>
      <Link to="/login"> <button className='border-2 border-white px-7 rounded-full  py-2'>
        Register/SignIn

        </button></Link> 
    </div>

    </div>
    <div className='flex gap-5 md:gap-20  pt-4'>
  <Link to="/Ddashboard"> <div className='text-white hover:text-yellow-500 font-bold'>
        Dashboard
    </div></Link> 
    <Link to="/vcertify"><div className='text-white hover:text-yellow-500 font-bold'>
        Verify Certificate
    </div></Link>
   <Link to='/faq'> <div className='text-white hover:text-yellow-500 font-bold'>
        FAQ
    </div></Link>
  <Link to="/partner"> <div className='text-white hover:text-yellow-500 font-bold'>
        Partners
    </div></Link> 
    <div className='hidden md:block text-white hover:text-yellow-500 font-bold '>
      <Link to="/login"> <button className='border-2 border-white px-7 rounded-full  py-2'>
        Register/SignIn

        </button></Link> 
    </div>

    </div>
      
    </div>
  )
}

export default Headerb
