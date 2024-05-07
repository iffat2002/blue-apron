import React from 'react'

const Signup = () => {
  return (
    <div className='flex w-10/12 m-auto justify-between items-center p-20'>
        <div>
        <h1 className=" mt-8 text-[#002c9b] text-xl font-bold tracking-[6px] font-cerapro">
        SEE WHAT’S COOKING
          </h1>
          <p className='text-lg font-semibold w-[70%] text-gray-600'>Sign up for exclusive offers, recipes, news, and more.</p>
          </div>
          <div className='w-[400px] h-12 relative'>
            <input className='w-[400px] border px-3 border-gray-500 rounded-full h-12'placeholder='Email address'></input>
            <button className=" h-full w-32 absolute right-0  rounded-full rounded-l-none text-xs tracking-wider font-bold font-cerapro text-white bg-[#002c9b] ">
              SUBMIT
            </button>
          </div>
    </div>
  )
}

export default Signup