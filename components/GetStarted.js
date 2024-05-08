import React from "react";
import Link from "next/link";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div className="w-screen">
      <div className="text-center m-auto pt-20">
        <h1 className="  text-[#00a0df] text-[43px] font-bold max-md:text-3xl max-sm:text-2xl font-serif">
          Get started for as little as
        </h1>
        <h1 className="  text-[#002c9b] text-3xl max-md:text-2xl max-sm:base  max-sm:text-xl font-bold tracking-[5px] font-cerapro">
          $7.99 PER SERVING
        </h1>
        <p className="my-10 text-lg  max-sm:text-sm m-auto w-[65%] max-md:w-[80%] text-gray-600">
          With high-quality ingredients packed into every box, these delicious
          recipes deliver on value. If you do the math, making these recipes is
          cheaper with us than doing it on your own.
        </p>
        <Link href="/">
          <button className="rounded-full text-xs tracking-wider font-bold font-cerapro text-white h-11 w-44 max-md:w-[80%] bg-[#002c9b]">
            VIEW PLANS
          </button>
        </Link>
      </div>
      <div className="flex w-[80%] py-20 max-md:flex-col max-md:w-[50%] max-md:gap-5 m-auto gap-10  text-sm text-gray-600 max-md:pt-10 ">
        <div className="flex gap-4">
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
          <p  className="inline-block "> 
            <span className="font-bold">A variety of delicious dishes.</span> Choose from our rotating menus of
            chef-inspired recipes.
          </p>
        </div>
        <div  className="flex gap-4">
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
          <p  className="inline-block"> 
            <span className="font-bold">Flexible options.</span> Change how many recipes and servings you need each week.
          </p>
        </div>
        <div  className="flex gap-4">
          <Image
          className="inline-block"
            src="/sampleimage.svg"
            width={31}
            height={38}
            alt="icons"
          ></Image>
          <p  className="inline-block"> 
            <span className="font-bold">No commitment needed. </span> Skip or cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
