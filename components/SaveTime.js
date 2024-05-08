import React from 'react'
import Link from "next/link"
import Image from "next/image"

const SaveTime = () => {
  return (
    <div className='bg-[#00a0df]'>
        <div className=' text-center w-[65%]  max-sm:w-[90%] m-auto py-20'>
         <h1 className=" mt-8 text-white text-3xl max-md:text-2xl max-sm:text-xl font-bold tracking-[6px]  max-sm:tracking-[4px] font-cerapro">
         SAVE TIME. EAT WELL.
          </h1>
          </div>
          <div className="text-white flex w-10/12 max-md:flex-col m-auto gap-10 mb-16 text-sm  max-md:w-[50%] ">
        <div className='text-center'>
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
         <p className='font-bold mt-4 mb-2'>No shopping necessary</p>
         <p>Skip the store and skip stress of meal planning. We'll deliver what you need to your door.</p>
        </div>
        <div className='text-center'>
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
         <p className='font-bold mt-4 mb-2'>Easy-to-follow recipes</p>
         <p>Our recipes are quick and easy to make with step-by-step directions (and even the littlest cooks can help).</p>
        </div>
        <div className='text-center'>
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
         <p className='font-bold mt-4 mb-2'>Meals in a pinch</p>
         <p>Get dinner on the table in a snap. Our meals take only an average of 35 minutes to prepare.</p>
        </div>
        <div className='text-center'>
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
         <p className='font-bold mt-4 mb-2'>Quality ingredients</p>
         <p>You get sustainably farmed proteins, seasonally inspired produce, and unique ingredients delivered right to your door.</p>
        </div>
        
    </div>
    <div className='flex justify-center pb-20'>
    <Link  href="/">
          <button className=" rounded-full text-xs tracking-wider font-bold font-cerapro text-[#002c9b] h-11 w-44 bg-white">
            VIEW PLANS
          </button>
        </Link>
        </div>
    </div>
  )
}

export default SaveTime