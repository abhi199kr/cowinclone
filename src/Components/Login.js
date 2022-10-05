import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Headerb from './Headerb'
import clogin from './Images/clogin.svg'
import digilogo from './Images/digilogo.svg'

const Login = () => {
  return (
    <>
    <Header/>
    <Headerb/>
    <div class="grid h-screen place-items-center p-5 md:p-0">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-2 border-gray-100 p-3">
   <div className='bg-cyan-600 md:w-60 py-20 rounded'> <img class="rounded h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={clogin} alt="" /></div>
    <div class="px-5 mt-5 flex flex-col justify-start w-full">
      <h5 class="text-gray-900 text-xl inline mb-2 font-bold">Register Or Sign in for verification</h5>
      <p class="text-gray-700 text-base mb-4">
      An OTP will be sent to your mobile number for verification
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      <div className='pt-5'><input className='w-full border-2 hover:border-blue-500 rounded border-gray-200 text-gray-500 pl-5 py-3' type="text" placeholder='Enter your number' /></div>
      <button className='mt-5 py-3 bg-cyan-600 text-white font-bold text-center w-full border-2 hover:border-blue-500 rounded border-gray-200'>GET OTP</button>
      <p className='text-xs pt-3'>By Sign In/Registration, I agree to the Terms of Service and Privacy Policy</p>
    
     <span> <button className='mt-5 py-3 bg-sky-200  font-bold text-center w-full border-2 border-dotted border-indigo-500'>Login with  MeriPehachaan</button>
</span>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Login
