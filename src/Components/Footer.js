import React from 'react'
import nha from './Images/nha.png'

const Footer = () => {
  return (
    <>
    <div className='overflow-hidden'>
    <div className='flex gap-10 bg-cyan-600 py-10 px-10'>
    <div>
        <h1 className='text-cyan-400 font-bold'>Vaccination Services</h1>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        

    </div>
    <div>
        <h1 className='text-cyan-400 font-bold'>Vaccination Services</h1>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        

    </div>
    <div>
        <h1 className='text-cyan-400 font-bold'>Vaccination Services</h1>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        

    </div>
    <div>
        <h1 className='text-cyan-400 font-bold'>Vaccination Services</h1>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        <p className='hover:underline py-2 text-white'>Register Member</p>
        

    </div>

      
    </div>
    <div className='bg-purple-700 w-full flex py-4'>
    <div className='w-1/3 px-10'>
        <p className='text-white'>CopyWright &#169; 2022 CoWIN.All Right Reserved</p>
    </div>
    <div className='w-1/3 '>
        <img src={nha} className="w-20" alt="" />
    </div>
    <div className='w-1/3 ml-auto'>
    <p className='text-white items-end'>Terms of services Policy Services</p>

    </div>
    

    </div>
    </div>
    </>
  )
}

export default Footer
