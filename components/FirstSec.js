import React from "react";
import Image from "next/image";
import Link from "next/link";
const FirstSec = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-background-meal max-md:bg-background-rotate w-full h-full  bg-cover bg-center ">
      
        <div className="w-10/12 m-auto h-full justify-center flex flex-col max-sm:justify-start pt-10">
          <Image
           className="max-md:w-[180px]"
            src="https://v.fastcdn.co/u/d1da2199/53672418-0-BA-logo-Horizontal.svg"
            width={204}
            height={40}
            alt="web logo"
          ></Image>
          <h1 className=" mt-8 text-[#002c9b] text-5xl max-md:text-4xl font-bold tracking-[6px] max-sm:text-3xl max-sm:tracking-[3px] font-cerapro">
            A GREAT MEAL
          </h1>
          <h1 className=" my-5 text-[#00a0df] text-5xl max-md:text-4xl font-bold tracking-[1px] max-sm:text-3xl font-serif max-sm:my-2">
            changes everything
          </h1>
          <p className="my-4 text-lg w-[47%] max-md:w-[62%] max-sm:w-[82%] max-sm:text-base font-semibold max-md:my-0 text-gray-600">
            Choose from 80+ weekly meals with high-quality ingredients and
            options for every lifestyle, including vegetarian, carb-conscious,
            Heat & Eat, and more.
          </p>
          <Link href="/pricing">
            <button className="rounded-full text-xs tracking-wider font-bold font-cerapro text-white h-11 mt-8 max-sm:mt-4  max-sm:h-10 w-40 bg-[#002c9b]">
              VIEW PLANS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
