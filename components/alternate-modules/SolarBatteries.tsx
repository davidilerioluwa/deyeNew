"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SolarBatteries() {
  const [activeBattery, setActiveBattery] = useState<"rw6" | "bosg">("rw6");

  const batteryData = {
    rw6: {
      code: "DEYE RW-M6.1",
      name: "5.12kWh Wall-Mounted LiFePO4 Battery System",
      voltage: "51.2V Nominal (100Ah Capacity)",
      image: "/residentialEss.jpeg",
      chemistry: "Lithium Iron Phosphate (Cobalt-Free LFP)",
      specs: [
        { label: "Usable Energy", value: "4.61 kWh (90% Recommended DoD)" },
        { label: "Cycle Life", value: "≥ 6,000 cycles @ 25°C, 90% DoD, 0.5C/0.5C" },
        { label: "Charge/Discharge Current", value: "Recommended 50A, Max Continuous 100A" },
        { label: "BMS Communication", value: "CAN2.0, RS485 (Direct handshake with Deye inverters)" },
        { label: "Scalability", value: "Parallel up to 32 units (163.8 kWh total capacity)" },
        { label: "Operating Temperature", value: "Charge: 0~55°C, Discharge: -20~55°C" },
        { label: "Ingress Protection", value: "IP65 (Wall-mounted or floor pedestal mount)" },
        { label: "Warranty", value: "10-Year Manufacturer Warranty supported by CallHub" },
      ],
      description:
        "The gold standard for residential backup in Nigeria. Unlike lead-acid or gel batteries that degrade within 18 months, Deye LFP cells retain over 70% capacity after a decade of daily full-cycle operation.",
    },
    bosg: {
      code: "DEYE BOS-G (HIGH VOLTAGE)",
      name: "Modular Commercial High-Voltage Rack ESS",
      voltage: "153.6V – 614.4V High Voltage Architecture",
      image: "/CIESS.jpeg",
      chemistry: "Prismatic LiFePO4 with Central Control High-Voltage Box",
      specs: [
        { label: "Capacity Range", value: "15.36 kWh to 61.44 kWh per standard 19-inch rack" },
        { label: "Module Rating", value: "5.12 kWh per slide-in module (51.2V 100Ah)" },
        { label: "Efficiency", value: "> 95% round-trip conversion efficiency" },
        { label: "Thermal Architecture", value: "Forced air convection with intelligent ducting" },
        { label: "Safety Standard", value: "IEC62619, CE, VDE2510-50, UL1973 certified" },
        { label: "BMS Control Unit", value: "BOS-G-PDU with built-in DC breaker and display" },
        { label: "Target Application", value: "Factories, gas stations, server rooms, medical labs" },
        { label: "Service Program", value: "CallHub Enterprise SLA with scheduled cell-balancing audit" },
      ],
      description:
        "Engineered for high-voltage Deye hybrid inverters (SUN-20K to 50K). Eliminates heavy copper cable losses associated with 48V systems, driving industrial motors, chillers, and CNC machinery without voltage drops.",
    },
  };

  const current = batteryData[activeBattery];

  return (
    <section id="batteries" className="w-full bg-[#f4f4f2] text-[#0f1112] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#deded9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Architectural Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#deded9] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#0f1112] font-bold mb-2">
              [ 02 // ENERGY STORAGE SYSTEMS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f1112] uppercase font-sans">
              Deye LiFePO4 Storage
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-600 max-w-md leading-relaxed">
            Tier-1 Lithium Iron Phosphate chemistry with zero fire propagation risk. Deep cycle longevity engineered for Nigeria's extreme ambient temperatures.
          </p>
        </div>

        {/* System Toggle (Tabs in Light Mode) */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveBattery("rw6")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeBattery === "rw6"
                ? "bg-[#0f1112] text-white border-[#0f1112]"
                : "bg-white text-gray-600 border-[#deded9] hover:border-gray-400"
            }`}
          >
            RW-M6.1 Residential (48V Wall-Mount)
          </button>
          <button
            onClick={() => setActiveBattery("bosg")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeBattery === "bosg"
                ? "bg-[#0f1112] text-white border-[#0f1112]"
                : "bg-white text-gray-600 border-[#deded9] hover:border-gray-400"
            }`}
          >
            BOS-G Commercial Rack (High-Voltage)
          </button>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-white border border-[#deded9] p-6 sm:p-10 shadow-sm">
          {/* Left: Product Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="bg-[#eaeae6] border border-[#deded9] p-8 relative flex items-center justify-center min-h-[340px]">
              <div className="relative w-full h-72">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] text-gray-600 font-bold">
                CHEMISTRY: {current.chemistry}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-gray-700 font-bold">
                VOLTAGE: {current.voltage}
              </div>
            </div>

            <div className="p-4 bg-[#eaeae6] border border-[#deded9] mt-4 font-mono text-xs">
              <span className="text-gray-500 block text-[10px] uppercase mb-1 font-bold">
                ENGINEERING NOTE:
              </span>
              <p className="text-gray-800 font-sans text-xs leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* Right: Technical Table */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">
                [ BATTERY CELL METRICS ]
              </div>
              <h3 className="text-2xl font-bold text-[#0f1112] mb-1">{current.name}</h3>
              <p className="text-xs font-mono text-gray-600 mb-6">
                MODEL IDENTIFIER: {current.code}
              </p>

              {/* Data Matrix */}
              <div className="border-t border-[#deded9] divide-y divide-[#deded9] font-mono text-xs mb-8">
                {current.specs.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-[#0f1112] font-bold text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-[#deded9]">
              <a
                href="#quote-section"
                className="bg-[#0f1112] hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 text-center transition-colors"
              >
                Request Sizing & Quotation [→]
              </a>
              <span className="font-mono text-[11px] text-gray-600 text-center sm:text-left">
                Genuine Deye Lithium Cells with Local CallHub Swaps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
