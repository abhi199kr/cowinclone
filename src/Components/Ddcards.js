import React from 'react'
import reg from './Images/reg.png'
import vd from './Images/vd.png'
import vt from './Images/vt.png'
import va from './Images/va.png'

const Ddcards = () => {
  return (
    <div className='p-5 overflow-hidden'>
    <div className='flex flex-col md:flex-row gap-1'>
    <div className='rounded bg-sky-500 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>Registration</h1>
        <p className='font-bold'>98745</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded'>Today</button>


    </div>
    <div className='rounded bg-pink-300 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>Vaccinations</h1>
        <p className='font-bold'>155623</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded'>Today</button>


    </div>
    <div className='rounded bg-orange-300 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>Partially Vaccinated</h1>
        <p className='font-bold'>98745</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded block md:hidden lg:block'>Todays</button>


    </div>
    <div className='rounded bg-green-300 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>Fully Vaccinated</h1>
        <p className='font-bold'>10745</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded  block md:hidden lg:block'>Today</button>


    </div>

    </div>
    {/* From hear New flex started */}
    <div className='flex flex-col md:flex-row gap-1 pt-5'>
    <div className='rounded bg-orange-100 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>12-14 Vaccinations</h1>
        <p className='font-bold'>10001</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded block md:hidden lg:block'>Today</button>


    </div>
    <div className='rounded bg-purple-300 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>15-17Vaccinations</h1>
        <p className='font-bold'>155623</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded v'>Today</button>


    </div>
    <div className='rounded bg-pink-100 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>18-59 Vaccinated</h1>
        <p className='font-bold'>98745</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded block md:hidden lg:block'>Today</button>


    </div>
    <div className='rounded bg-green-100 w-full md:w-1/4 h-32 flex p-5'>
    <img src={reg} className='rounded-full w-16 h-16' alt="" />
    <div className='pl-2'>
        <h1 className='font-bold'>60+ Vaccinated</h1>
        <p className='font-bold'>10745</p>
    </div>
    <button className='ml-auto bg-gray-400  h-10 px-2 rounded block md:hidden lg:block'>Today</button>


    </div>

    </div>
    {/* From Hear 3 flex starts */}
    <div className='flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-20'>
    <div class="max-w-sm w-full md:w-1/3 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h1 className='font-bold p-5'>Vaccination by Gender</h1>
    <a href="#">
        <img class="rounded-t-lg" src={vd} alt="" className='px-20  text-center h-80 w-fit'/>
    </a>
    
</div>

<div class="max-w-sm w-full md:w-1/3 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h1 className='font-bold p-5'>Vaccination by Type</h1>
    <a href="#">
        <img class="rounded-t-lg" src={vt} alt="" className='px-20  text-center h-80 w-fit'/>
    </a>
    
</div>

<div class="max-w-sm w-full md:w-1/3 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h1 className='font-bold p-5'>Vaccination By Age</h1>
    <a href="#">
        <img class="rounded-t-lg" src={va} alt="" className='px-20  text-center h-80 w-fit'/>
    </a>
    
</div>

    </div>
      
    </div>
  )
}

export default Ddcards
