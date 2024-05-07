import React from "react";
import Image from "next/image";
import Link from "next/link";
const FirstSec = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-background-meal w-full h-full  bg-cover bg-center">
        <div className="w-10/12 m-auto h-full justify-center flex flex-col">
          <Image
            src="https://v.fastcdn.co/u/d1da2199/53672418-0-BA-logo-Horizontal.svg"
            width={204}
            height={40}
            alt="web logo"
          ></Image>
          <h1 className=" mt-8 text-[#002c9b] text-5xl font-bold tracking-[6px] font-cerapro">
            A GREAT MEAL
          </h1>
          <h1 className=" my-5 text-[#00a0df] text-5xl font-bold tracking-[1px] font-serif">
            changes everything
          </h1>
          <p className="my-4 text-lg w-[47%] font-semibold text-gray-600">
            Choose from 80+ weekly meals with high-quality ingredients and
            options for every lifestyle, including vegetarian, carb-conscious,
            Heat & Eat, and more.
          </p>
          <Link href="/">
            <button className="rounded-full text-xs tracking-wider font-bold font-cerapro text-white h-11 mt-8 w-40 bg-[#002c9b]">
              VIEW PLANS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
