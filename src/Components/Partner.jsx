import React from 'react'
import digilogo from "./Images/digilogo.svg"
import arogya from "./Images/arogya.svg"
import jio from "./Images/jio.svg"
import mygov from "./Images/mygov.svg"
import stepone from "./Images/Stepone.svg"

const Partner = () => {
  return (
    <div className=' '>
    {/* Padding should be correct hear */}
   <div className='bg-cyan-600  h-96 p- text-center'>
   <h1 className='text-white font-bold text-2xl  '>BECOME A COWIN PARTNER</h1>
    <button className='bg-white rounded-full px-5 h-28 font-bold text-2xl text-red-700 pt-3 mb-3'>RegsiterNow</button>
   </div>
    <h1 className='text-center font-bold text-3xl'>Our Partners</h1>
{/* This div is for making center our Partners */}
<div className='grid  place-items-center '>
        <div className='flex flex-col md:flex-row gap-5 items-center'>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center' src={digilogo} alt="" />
        </div>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center px-auto' src={arogya} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={jio} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={mygov} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={stepone} alt="" />
        </div>


        </div>
        {/* From Hear 2nd flex sarted */}

        <div className='flex flex-col md:flex-row gap-5 items-center mt-5'>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center' src={digilogo} alt="" />
        </div>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center px-auto' src={arogya} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={jio} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={mygov} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={stepone} alt="" />
        </div>


        </div>
        {/* From her 3rd flex started */}
        <div className='flex flex-col md:flex-row gap-5 items-center mt-5'>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center' src={digilogo} alt="" />
        </div>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center px-auto' src={arogya} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={jio} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={mygov} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={stepone} alt="" />
        </div>


        </div>
        {/* From Hear 4th flex */}
        <div className='flex flex-col md:flex-row gap-5 items-center mt-5'>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center' src={digilogo} alt="" />
        </div>
        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14 text-center'>
            <img className='h-10 w-2.5 mt-2 mb-2 text-center px-auto' src={arogya} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={jio} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={mygov} alt="" />
        </div>

        <div className='border-2 rounded-lg border-gray-100 px-10 py-5 h-14'>
            <img className='h-10 w-2.5 mt-2 mb-2' src={stepone} alt="" />
        </div>


        </div>
    </div>

    </div>
  )
}

export default Partner
