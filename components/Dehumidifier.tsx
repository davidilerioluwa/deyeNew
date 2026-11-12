import React from "react";
import Image from "next/image";

const Dehumidifier = () => {
  return (
    <div id="dehumidifiers" className="w-full flex flex-col-reverse md:grid md:grid-cols-2 xl:min-h-screen gap-8 md:gap-0 bg-black p-6 py-16 md:p-10 xl:p-12">
      <div className="md:pr-12 flex flex-col justify-between h-full text-white items-start text-xl lg:text-2xl xl:text-4xl font-bold uppercase gap-4 md:gap-12">
        <div className="flex flex-col gap-2 xl:gap-4 items-center w-full">
          <h2>Flawless power flow,</h2>
          <h2>day and night.</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/ceilingDehumidifier.png"
                alt="Ceiling Dehumidifier"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center">Ceiling Dehumidifier</span>
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/homeDehumidifier.png"
                alt="Home Dehumidifier"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center">Home Dehumidifier</span>
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/industrialDehumidifier.png"
                alt="Industrial Dehumidifier"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center">Industrial Dehumidifier</span>
          </div>
        </div>
      </div>
      <div className="relative h-80 md:h-full">
        <Image
          src="/dehumidifier-bg.jpg"
          alt="Dehumidifier Background"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="brightness-60 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col gap-6 items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl text-white">DEHUMIDIFIER</h2>
          <a href="#quote-section">
            <button className="bg-black/20 hover:bg-black/40 border border-white text-white px-4 py-3 rounded-lg transition-colors">
              REQUEST A QUOTE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dehumidifier;
