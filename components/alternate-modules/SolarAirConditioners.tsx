"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SolarAirConditioners() {
  const [activeAcKey, setActiveAcKey] = useState<"hybrid" | "dc48" | "heater">("hybrid");

  const acModels = {
    hybrid: {
      code: "DEYE HYBRID AC/DC SERIES",
      name: "Solar Inverter Air Conditioner (Direct PV Input)",
      capacities: "1.0 HP (9,000 BTU) / 1.5 HP (12,000 BTU) / 2.0 HP (18,000 BTU) / 2.5 HP (24,000 BTU)",
      image: "/Hybrid_ACDC_conditioner.jpeg",
      specs: [
        { label: "Solar DC Input Range", value: "80V – 380V Direct PV (Connects straight to panels)" },
        { label: "Daytime Power Draw", value: "100% Solar Driven (Zero public grid or generator fuel needed)" },
        { label: "Automatic Power Blending", value: "Blends grid AC seamlessly when cloud cover passes" },
        { label: "Compressor Type", value: "DC Twin-Rotary Inverter (T3 Tropicalized up to 58°C)" },
        { label: "Refrigerant", value: "Eco-Friendly R32 / R410A High-Efficiency Gas" },
        { label: "Sound Level", value: "Ultra-quiet indoor unit (&lt; 24 dB whisper mode)" },
        { label: "Wi-Fi Telemetry", value: "Real-time solar wattage & KWh savings tracking app" },
        { label: "Warranty", value: "5 Years Compressor / 2 Years Electronics via CallHub" },
      ],
      engineeringNote:
        "Standard air conditioners trip inverters and guzzle generator diesel. Deye Hybrid AC connects directly to 3–6 rooftop solar panels without an inverter, chilling rooms completely free between 9:00 AM and 5:30 PM.",
    },
    dc48: {
      code: "DEYE 100% DC48V TELECOM/OFF-GRID",
      name: "Off-Grid DC48V Solar Air Conditioner",
      capacities: "1.0 HP / 1.5 HP (9,000 – 12,000 BTU)",
      image: "/DC48V_Solar.jpeg",
      specs: [
        { label: "Operating Voltage", value: "48V DC (42V – 58V Battery Voltage Range)" },
        { label: "Inverter Requirement", value: "None (Zero DC-to-AC conversion loss)" },
        { label: "Motor Technology", value: "Full DC Brushless Fan & Compressor Motors" },
        { label: "Efficiency Rating", value: "SEER 23+ (Consumes 40% less energy than standard ACs)" },
        { label: "Target Application", value: "Telecom base stations, off-grid farmhouses, marine cabins" },
        { label: "Low Voltage Cutoff", value: "Smart BMS cutoff protects lithium batteries from over-discharge" },
        { label: "Installation Footprint", value: "Standard split-unit mounting with DC circuit breaker" },
        { label: "Warranty", value: "3 Years Comprehensive Local CallHub Warranty" },
      ],
      engineeringNote:
        "Engineered for true off-grid installations where no public grid or generator exists. Connects straight to your 48V battery bus, completely avoiding the idle power waste and wear on standalone inverters.",
    },
    heater: {
      code: "DEYE HYBRID SOLAR THERMAL HEATER",
      name: "Photovoltaic Hybrid Water Heating System",
      capacities: "150L / 200L / 300L Pressure Tanks",
      image: "/Hybrid_ACDC_Heater.jpeg",
      specs: [
        { label: "Energy Source", value: "Dual: Direct Solar PV Panels + Auxiliary Electric Element" },
        { label: "Tank Construction", value: "SUS304 Food-Grade Stainless Steel Inner Vessel" },
        { label: "Insulation Layer", value: "High-density polyurethane foam (&lt; 5°C loss per 24 hours)" },
        { label: "Plumbing Simplicity", value: "No roof water pipes or glycol pumps (wires only from solar panels)" },
        { label: "Maximum Water Temp", value: "75°C with digital precision thermostat control" },
        { label: "Protection", value: "Magnesium anode anti-corrosion rod + over-pressure relief valve" },
        { label: "Ideal Deployment", value: "Luxury duplexes, hotels, boarding schools, and health clinics" },
        { label: "Warranty", value: "5 Years Tank Warranty supported by CallHub Nigeria" },
      ],
      engineeringNote:
        "Unlike old solar thermal systems that required risky water pipes on the roof prone to leaks, Deye uses standard solar PV panels connected by electric cables to an intelligent thermodynamic heating controller.",
    },
  };

  const current = acModels[activeAcKey];

  return (
    <section id="air-conditioners" className="w-full bg-[#0f1112] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-2">
              [ 03 // SOLAR CLIMATE & HVAC ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              Deye Direct Solar AC
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md leading-relaxed">
            Eliminate daytime generator bills. Connect rooftop solar panels directly into your air conditioner with zero inverter conversion losses.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveAcKey("hybrid")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeAcKey === "hybrid"
                ? "bg-white text-[#0f1112] border-white"
                : "bg-[#141719] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            Hybrid AC/DC (Direct Solar PV + Grid Blend)
          </button>
          <button
            onClick={() => setActiveAcKey("dc48")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeAcKey === "dc48"
                ? "bg-white text-[#0f1112] border-white"
                : "bg-[#141719] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            100% DC48V Off-Grid (Battery Direct)
          </button>
          <button
            onClick={() => setActiveAcKey("heater")}
            className={`px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all border ${
              activeAcKey === "heater"
                ? "bg-white text-[#0f1112] border-white"
                : "bg-[#141719] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            Solar Water Heating
          </button>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#141719] border border-white/10 p-6 sm:p-10">
          {/* Left: Product Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="bg-[#0f1112] border border-white/10 p-8 relative flex items-center justify-center min-h-[340px]">
              <div className="relative w-full h-72">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] text-gray-500">
                SERIES: {current.code}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#00e5ff]">
                DIRECT SOLAR OPERATION
              </div>
            </div>

            <div className="p-4 bg-[#0a0b0c] border border-white/10 mt-4 font-mono text-xs">
              <span className="text-gray-500 block text-[10px] uppercase mb-1">
                SYSTEM EFFICIENCY EXPLANATION:
              </span>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                {current.engineeringNote}
              </p>
            </div>
          </div>

          {/* Right: Technical Table */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-wider mb-2">
                [ HVAC ENGINEERING DATA ]
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{current.name}</h3>
              <p className="text-xs font-mono text-gray-400 mb-6">
                CAPACITY RANGE: {current.capacities}
              </p>

              {/* Data Matrix */}
              <div className="border-t border-white/10 divide-y divide-white/5 font-mono text-xs mb-8">
                {current.specs.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-white font-medium text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="#quote-section"
                className="bg-white hover:bg-gray-200 text-[#0f1112] font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 text-center transition-colors"
              >
                Inquire Pricing & Sizing [→]
              </a>
              <span className="font-mono text-[11px] text-gray-500 text-center sm:text-left">
                Same-Day Pallet Delivery Across Lagos & Abuja
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
