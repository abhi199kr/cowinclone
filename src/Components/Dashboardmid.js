import React from 'react'
import first from './Images/first.svg'
import second from './Images/second.svg'

import third from './Images/third.svg'


const Dashboardmid = () => {
  return (
    <div className='py-10'>
    <h1 className='font-bold text-center text-cyan-600 text-3xl'>Get Vaccinated in 3 Easy Steps</h1>
    <div class="grid  place-items-center">Centered using Tailwind Grid
    <div className='flex flex-col md:flex-row gap-8'>
  <div><p className='text-center border-2 border-cyan-200 px-4 w-fit mx-auto rounded-full font-bold text-cyan-600'>Step 1</p>
<div class="max-w-sm mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={first} alt="" className='text-center h-56 w-full'/>
    </a>
    <div class="p-5 font-bold  text-2xl bg-cyan-400 text-white">
    <p>Book an Appointment or <br />walk in any vaccination center</p>
        
    </div>
    <div className='p-5 text-center'>
    <p>How to book your appointment  <br /> on Co-Win</p>

    </div>
</div>
</div>  
    
    <div><p className='text-center border-2 border-cyan-200 px-4 w-fit mx-auto rounded-full font-bold text-cyan-600'>Step 2</p>
<div class="max-w-sm mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={second} alt="" className='text-center h-56 w-full'/>
    </a>
    <div class="p-5 font-bold  text-2xl bg-cyan-400 text-white">
    <p>Book an Appointment or <br />walk in any vaccination center</p>
        
    </div>
    <div className='p-5 text-center'>
    <p>How to book your appointment  <br /> on Co-Win</p>

    </div>
</div>
</div>

    
<div><p className='text-center border-2 border-cyan-200 px-4 w-fit mx-auto rounded-full font-bold text-cyan-600'>Step 3</p>
<div class="max-w-sm mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={third} alt="" className='text-center h-56 w-full'/>
    </a>
    <div class="p-5 font-bold  text-2xl bg-cyan-400 text-white">
    <p>Book an Appointment or <br />walk in any vaccination center</p>
        
    </div>
    <div className='p-5 text-center'>
    <p>How to book your appointment  <br /> on Co-Win</p>

    </div>
</div>
</div>



    </div>
    </div>

    </div>
  )
}

export default Dashboardmid
