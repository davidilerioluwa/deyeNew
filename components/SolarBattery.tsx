import React from "react";
import Image from "next/image";

const SolarBattery = () => {
  return (
    <div id="batteries" className="w-full flex flex-col md:grid md:grid-cols-2 xl:min-h-screen gap-8 md:gap-0 bg-white p-6 py-16 md:p-10 xl:p-12">
      <div className="relative h-80 md:h-full">
        <Image
          src="/solar-battery-clean.jpg"
          alt="Solar Battery Background"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="brightness-60 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col gap-6 items-center justify-center">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl text-white">
            SOLAR INVERTER BATTERY
          </h2>
          <a href="#quote-section">
            <button className="bg-black/20 hover:bg-black/40 border border-white text-white px-4 py-3 rounded-lg transition-colors">
              REQUEST A QUOTE
            </button>
          </a>
        </div>
      </div>
      <div className="md:pl-12 flex flex-col justify-between h-full text-black items-start text-xl lg:text-2xl xl:text-4xl font-bold uppercase gap-4 md:gap-12">
        <div className="flex flex-col gap-2 xl:gap-4 items-center w-full">
          <h2>Continuous power.</h2>
          <h2>Unmatched reliability.</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative bg-white rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/residentialEss.jpeg"
                alt="Residential ESS"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold">Residential</span>
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative bg-white rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/CIESS.jpeg"
                alt="C&I ESS"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold">C&I ESS</span>
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="relative bg-white rounded-lg h-40 xl:h-48 w-full flex flex-col justify-center items-center">
              <Image
                src="/utilityScaleEss.jpeg"
                alt="Utility Scale Storage"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-center">Utility Scale Storage</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBattery;
