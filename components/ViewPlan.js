import React from 'react'
import Link from "next/link"
const ViewPlan = () => {
  return (
    <div className='h-screen w-full
    '>
           <div className="bg-background-food w-full h-full flex bg-cover bg-center">
<div className='w-[50%] max-md:w-[80%] max-sm:w-[90%] bg-white rounded-lg h-[50%] m-auto  flex justify-center p-5 flex-col text-center '>
<h1 className=" text-[#00a0df] text-[40px] max-md:text-[30px] font-extrabold  font-serif">
Get started for as little as
          </h1>
          <h1 className=" text-[#002c9b] text-4xl max-md:text-2xl font-bold tracking-[6px] font-cerapro">
          $7.99 PER SERVING
          </h1>
          <Link href="/">
            <button className="rounded-full text-xs tracking-wider font-bold font-cerapro text-white h-11 mt-8 w-44 bg-[#002c9b]">
              VIEW PLANS
            </button>
          </Link>
</div>
           </div>
    </div>
  )
}

export default ViewPlan