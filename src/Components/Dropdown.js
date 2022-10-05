import React from 'react'

const Dropdown = () => {
  return (
    <>
    <div class="flex justify-center">
  <div class="mb-3">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected className='text-white bg-gray-400 font-bold '>English</option>
        <option value="1">Hidi</option>
        <option value="2">Punjabi</option>
        <option value="3">Gujarati</option>
    </select>
  </div>
</div>
    </>
  )
}

export default Dropdown
