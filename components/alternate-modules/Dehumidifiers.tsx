"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Dehumidifiers() {
  const [activeDehumKey, setActiveDehumKey] = useState<"home" | "ceiling" | "industrial">("home");

  const dehumData = {
    home: {
      code: "DEYE HOME INTELLIGENT SERIES",
      name: "Portable Residential Dehumidifier with Ionizer",
      capacity: "20L – 50L / Day Moisture Extraction",
      image: "/homeDehumidifier.png",
      specs: [
        { label: "Moisture Extraction Rate", value: "20L to 50L / 24 hours (30°C, 80% RH)" },
        { label: "Recommended Room Size", value: "25 m² – 70 m² (Bedrooms, walk-in closets, home cinemas)" },
        { label: "Target Relative Humidity", value: "Adjustable 30% – 80% RH with precision sensor" },
        { label: "Water Tank Capacity", value: "4.5L – 6.5L transparent reservoir with overflow auto-stop" },
        { label: "Continuous Drain Bypass", value: "Includes gravity drainage hose for non-stop unattended drainage" },
        { label: "Air Filtration", value: "Washable silver-ion antibacterial filter + negative ion generator" },
        { label: "Noise Rating", value: "&lt; 38 dB whisper quiet operation" },
        { label: "Power Draw", value: "240W – 380W ultra-low electrical consumption" },
      ],
      practicalContext:
        "Stops toxic black mold, wardrobe dampness, and leather fungal rot in coastal Lagos (Ikoyi, Lekki, Victoria Island) and Port Harcourt without freezing the room.",
    },
    ceiling: {
      code: "DEYE CONCEALED CEILING DUCTED SERIES",
      name: "Architectural Ceiling-Mounted Dehumidifier",
      capacity: "26L – 90L / Day Ducted Extraction",
      image: "/ceilingDehumidifier.png",
      specs: [
        { label: "Moisture Extraction Rate", value: "26L / 50L / 90L per day options" },
        { label: "Installation Method", value: "Recessed inside gypsum or acoustic false ceiling cavity" },
        { label: "Airflow Ducting", value: "Connects to supply and return air ducts for balanced distribution" },
        { label: "Condensate Lift Pump", value: "Built-in commercial drainage pump (1.2m head lift)" },
        { label: "Wall Controller", value: "Flush-mount digital touch panel with 24h timer programming" },
        { label: "Fresh Air Intake", value: "Optional fresh air damper connection for oxygen replenishment" },
        { label: "Heat Exchanger", value: "Hydrophobic aluminum fin coil with anti-corrosion coating" },
        { label: "Warranty", value: "3 Years Comprehensive CallHub Trade Warranty" },
      ],
      practicalContext:
        "The favorite of interior architects and high-end estate builders. Completely invisible from the room, operating silently through concealed ceiling linear diffusers.",
    },
    industrial: {
      code: "DEYE COMMERCIAL & INDUSTRIAL SERIES",
      name: "Heavy-Duty Warehouse & Pharmaceutical Dehumidifier",
      capacity: "90L – 480L / Day High-Volume Extraction",
      image: "/industrialDehumidifier.png",
      specs: [
        { label: "Moisture Extraction Rate", value: "138L to 480L / 24 hours" },
        { label: "Compressor Engineering", value: "Panasonic or Hitachi industrial scroll compressor" },
        { label: "Air Circulation Volume", value: "1,200 m³/h – 4,800 m³/h high-velocity centrifugal blower" },
        { label: "Chassis Construction", value: "1.2mm cold-rolled heavy gauge sheet steel with epoxy powder coat" },
        { label: "Automatic Defrosting", value: "Intelligent microcomputer defrosting for cold room operation" },
        { label: "Refrigerant", value: "R410A Commercial Grade" },
        { label: "Target Facilities", value: "Pharma drug storage, archive libraries, paper printing, seed silos" },
        { label: "Warranty & Parts", value: "Full spare parts inventory stocked at CallHub Lagos depot" },
      ],
      practicalContext:
        "Required for NAFDAC and GMP compliance in pharmaceutical warehouses and cleanrooms where exceeding 60% relative humidity leads to ruined stock and regulatory penalties.",
    },
  };

  const current = dehumData[activeDehumKey];

  return (
    <section id="dehumidifiers" className="w-full bg-[#f4f4f2] text-[#0f1112] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#deded9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#deded9] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#0f1112] font-bold mb-2">
              [ 04 // MOISTURE & HUMIDITY ENGINEERING ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f1112] uppercase font-sans">
              Deye Dehumidifiers
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-600 max-w-md leading-relaxed">
            Engineered humidity extraction preventing mold, wardrobe spoilage, and electronic corrosion in coastal Nigerian climates.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveDehumKey("home")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeDehumKey === "home"
                ? "bg-[#0f1112] text-white border-[#0f1112]"
                : "bg-white text-gray-600 border-[#deded9] hover:border-gray-400"
            }`}
          >
            Residential Portable (20L – 50L)
          </button>
          <button
            onClick={() => setActiveDehumKey("ceiling")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeDehumKey === "ceiling"
                ? "bg-[#0f1112] text-white border-[#0f1112]"
                : "bg-white text-gray-600 border-[#deded9] hover:border-gray-400"
            }`}
          >
            Concealed Ceiling Ducted
          </button>
          <button
            onClick={() => setActiveDehumKey("industrial")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeDehumKey === "industrial"
                ? "bg-[#0f1112] text-white border-[#0f1112]"
                : "bg-white text-gray-600 border-[#deded9] hover:border-gray-400"
            }`}
          >
            Industrial Warehouse (138L – 480L)
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
                EXTRACTION: {current.capacity}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-gray-700 font-bold">
                SERIES: {current.code}
              </div>
            </div>

            <div className="p-4 bg-[#eaeae6] border border-[#deded9] mt-4 font-mono text-xs">
              <span className="text-gray-500 block text-[10px] uppercase mb-1 font-bold">
                CLIMATE PROTECTION CONTEXT:
              </span>
              <p className="text-gray-800 font-sans text-xs leading-relaxed">
                {current.practicalContext}
              </p>
            </div>
          </div>

          {/* Right: Technical Table */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">
                [ TECHNICAL EXTRACTION METRICS ]
              </div>
              <h3 className="text-2xl font-bold text-[#0f1112] mb-1">{current.name}</h3>
              <p className="text-xs font-mono text-gray-600 mb-6">
                CAPACITY: {current.capacity}
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
                Inquire Dehumidifier Stock & Delivery [→]
              </a>
              <span className="font-mono text-[11px] text-gray-600 text-center sm:text-left">
                Stocked in CallHub Lagos & Abuja Depots
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
