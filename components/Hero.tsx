import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="w-screen hidden md:grid grid-cols-2 h-screen absolute top-0 left-0 z-[-1]">
        <div className="relative w-full h-full">
          <Image
            src="/solar-battery-clean.jpg"
            alt="Solar Battery Architecture"
            fill
            sizes="50vw"
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/solar-inverter-clean.jpg"
            alt="Solar Inverter Architecture"
            fill
            sizes="50vw"
            className="object-cover brightness-40"
            priority
          />
        </div>
      </div>

      <div className="w-screen md:hidden h-screen absolute top-0 left-0 z-[-1]">
        <div className="relative w-full h-full">
          <Image
            src="/hero-mobile.jpg"
            alt="Mobile Hero Background"
            fill
            sizes="100vw"
            className="object-cover brightness-60"
            priority
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 flex flex-col gap-4 text-center w-full h-full justify-center items-center px-4">
        <p className="font-semibold text-3xl md:text-4xl lg:text-7xl text-white tracking-wide">
          POWER SMART WITH DEYE
        </p>
        <p className="text-sm md:text-xl text-blue-200 font-medium tracking-widest uppercase">
          Supplied &amp; Integrated by CallHub Nigeria
        </p>
        <a
          href="#quote-section"
          className="bg-[#015cbb] hover:bg-blue-700 border border-white z-10 text-white font-bold px-6 py-3 rounded-lg transition-colors mt-2"
        >
          REQUEST A QUOTE
        </a>
      </div>

      <div className="p-6 w-full h-[90dvh]">
        <div className="p-20 flex flex-col gap-10 relative h-full">
          <div className="bg-black/20 px-4 py-3 border border-white/20 rounded-lg gap-6 w-fit hidden">
            <button className="text-white">[ 01 ]</button>
            <button className="text-gray-400">[ 02 ]</button>
            <button className="text-gray-400">[ 03 ]</button>
            <button className="text-gray-400">[ 04 ]</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
