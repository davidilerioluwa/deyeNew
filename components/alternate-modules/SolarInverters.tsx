"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SolarInverters() {
  const [activeModelKey, setActiveModelKey] = useState<"sun8k" | "sun12k" | "sun5k">("sun8k");

  const models = {
    sun8k: {
      code: "SUN-8K-SG01LP1-EU",
      name: "8kW Low-Voltage Single Phase Hybrid Inverter",
      target: "Duplexes, villas, small clinics, and executive residential loads.",
      image: "/hybridInverter.png",
      specs: [
        { label: "Rated AC Output", value: "8,000 W (Peak 16,000 W for 10s)" },
        { label: "Max PV DC Input", value: "10,400 W" },
        { label: "Battery Voltage Range", value: "40V – 60V (Low-Voltage LiFePO4 / Lead)" },
        { label: "Max Charge / Discharge Current", value: "190 A" },
        { label: "MPPT Trackers", value: "2 independent MPPTs (125V – 425V range)" },
        { label: "Grid-to-Battery Switchover", value: "< 4ms (True Micro-UPS standard)" },
        { label: "Generator Auto-Start", value: "Built-in ATS Dry Contact Signal Relay" },
        { label: "Parallel Operation", value: "Up to 16 units in parallel (On-Grid & Off-Grid)" },
      ],
      operationalNote:
        "Easily powers 2–3 modern inverter air conditioners (1.5HP), water borehole pumping machine, freezers, and entertainment electronics without dips.",
    },
    sun12k: {
      code: "SUN-12K-SG04LP3-EU",
      name: "12kW Low-Voltage Three Phase Hybrid Inverter",
      target: "Commercial offices, multi-tenant buildings, and luxury estates with 3-phase supply.",
      image: "/threePhaseInverter.png",
      specs: [
        { label: "Rated AC Output", value: "12,000 W (Three Phase 380V / 400V / 415V)" },
        { label: "Max PV DC Input", value: "15,600 W" },
        { label: "Battery Voltage Range", value: "40V – 60V" },
        { label: "Max Charge / Discharge Current", value: "240 A" },
        { label: "100% Unbalanced Output", value: "Supports up to 50% rated power on single phase" },
        { label: "Switchover Speed", value: "< 4ms Seamless UPS" },
        { label: "Generator Synchronization", value: "Auto frequency lock and peak-shaving" },
        { label: "Cooling Architecture", value: "Intelligent Fan Cooling with IP65 ingress rating" },
      ],
      operationalNote:
        "Solves 3-phase phase-imbalance issues in Nigerian facilities; supplies unbalanced loads up to 50% on one phase while keeping machines protected.",
    },
    sun5k: {
      code: "SUN-5K-SG03LP1-EU",
      name: "5kW Single Phase Hybrid Inverter",
      target: "Apartments, 3-4 bedroom flats, and compact residential setups.",
      image: "/singlePhaseInverter.png",
      specs: [
        { label: "Rated AC Output", value: "5,000 W" },
        { label: "Max PV DC Input", value: "6,500 W" },
        { label: "Battery Voltage Range", value: "40V – 60V" },
        { label: "Max Charge / Discharge Current", value: "120 A" },
        { label: "MPPT Trackers", value: "2 MPPTs (125V – 425V range)" },
        { label: "Switchover Speed", value: "< 4ms UPS" },
        { label: "Weight / Enclosure", value: "20.5 kg / IP65 Wall-mount" },
        { label: "Monitoring Interface", value: "Color Touch LCD + Wi-Fi Deye Cloud Module" },
      ],
      operationalNote:
        "The standard workhorse for Nigerian homes. Seamlessly powers refrigerators, lights, TVs, fans, and 1 inverter air conditioner during load-shedding.",
    },
  };

  const current = models[activeModelKey];

  return (
    <section id="inverters" className="w-full bg-[#0f1112] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-2">
              [ 01 // INVERTER INVENTORY ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              Deye Hybrid Series
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md leading-relaxed">
            Direct DC-to-AC conversion with smart battery bus, automatic generator transfer, and touch-panel metering. Supplied by CallHub with full firmware support.
          </p>
        </div>

        {/* Model Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10">
          {(Object.keys(models) as Array<keyof typeof models>).map((key) => {
            const m = models[key];
            const isSelected = activeModelKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveModelKey(key)}
                className={`p-4 text-left border transition-all font-mono ${
                  isSelected
                    ? "border-[#00e5ff] bg-[#141719] text-white"
                    : "border-white/10 bg-[#0a0b0c] text-gray-400 hover:border-white/30 hover:text-gray-200"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs uppercase font-bold text-white">{m.code}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>}
                </div>
                <span className="text-[11px] text-gray-500 block truncate">{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Model Detailed Grid */}
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
                MODEL: {current.code}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#00e5ff]">
                CERTIFIED GENUINE OEM
              </div>
            </div>

            <div className="p-4 bg-[#0a0b0c] border border-white/10 mt-4 font-mono text-xs">
              <span className="text-gray-500 block text-[10px] uppercase mb-1">APPLICATION NOTE:</span>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                {current.operationalNote}
              </p>
            </div>
          </div>

          {/* Right: Technical Specification Table */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-wider mb-2">
                [ TECHNICAL PARAMETERS ]
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{current.name}</h3>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                RECOMMENDED APPLICATION: {current.target}
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
                Inquire Pricing for {current.code} [→]
              </a>
              <span className="font-mono text-[11px] text-gray-500 text-center sm:text-left">
                CallHub Warehouse Hotline: <strong className="text-white">09134280508</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
