import React from "react";
import Link from "next/link";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div>
      <div className="text-center w-[65%] m-auto p-20">
        <h1 className="  text-[#00a0df] text-[43px] font-bold  font-serif">
          Get started for as little as
        </h1>
        <h1 className="  text-[#002c9b] text-3xl font-bold tracking-[5px] font-cerapro">
          $7.99 PER SERVING
        </h1>
        <p className="my-10 text-lg   text-gray-600">
          With high-quality ingredients packed into every box, these delicious
          recipes deliver on value. If you do the math, making these recipes is
          cheaper with us than doing it on your own.
        </p>
        <Link href="/">
          <button className="rounded-full text-xs tracking-wider font-bold font-cerapro text-white h-11 w-44 bg-[#002c9b]">
            VIEW PLANS
          </button>
        </Link>
      </div>
      <div className="flex w-[774px] max-md:flex-row m-auto gap-10 mb-12 text-sm text-gray-600 ">
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
