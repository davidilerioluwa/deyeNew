"use client";
import React from "react";
import { Check, Zap, Sparkles, ArrowRight } from "lucide-react";

export default function PackageSolutions() {
  const packages = [
    {
      name: "Starter Home Solar Kit",
      tier: "Residential 5kW",
      badge: "Most Popular for Apartments",
      inverter: "Deye 5kW Hybrid Inverter (Single Phase)",
      battery: "5.12kWh LiFePO4 Lithium ESS (Wall-mount)",
      solarPV: "6x 585W Tier-1 Monocrystalline Solar Panels",
      powers: [
        "Refrigerator / Freezer",
        "1 Inverter AC (1HP or 1.5HP daytime/night switch)",
        "Home entertainment (TV, Sound System, Decoder)",
        "Lighting points, Wi-Fi router, laptop charging",
      ],
      popular: false,
    },
    {
      name: "Executive Villa Solution",
      tier: "Residential 8kW - 10kW",
      badge: "Best Value for Duplexes",
      inverter: "Deye 8kW / 10kW Low-Voltage Hybrid Inverter",
      battery: "10.24kWh - 15.36kWh LiFePO4 Lithium ESS",
      solarPV: "12x - 16x 585W Monocrystalline Panels",
      powers: [
        "2 to 3 Inverter Air Conditioners",
        "Water pumping machine (Borehole)",
        "Deep freezers, washing machines & refrigerators",
        "Security cameras, electric fence & exterior floodlights",
      ],
      popular: true,
    },
    {
      name: "Commercial & Industrial Hub",
      tier: "Enterprise 15kW - 50kW",
      badge: "Heavy Duty Three-Phase",
      inverter: "Deye 12kW – 50kW Three-Phase High Voltage Hybrid",
      battery: "20kWh – 60kWh C&I Modular Storage Rack",
      solarPV: "24x to 80x 585W Solar PV Array",
      powers: [
        "Centralized HVAC & server room cooling",
        "Office workstations, servers & elevator lighting",
        "Automated generator peak-shaving sync",
        "Heavy commercial kitchen or dental/medical equipment",
      ],
      popular: false,
    },
  ];

  return (
    <section className="w-full bg-[#1B2123] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#66E8FA] mb-2">
            <Zap className="w-4 h-4 text-[#66E8FA]" />
            <span>Turnkey Clean Energy Bundles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Engineered Deye System Packages
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Eliminate component mismatch. CallHub pre-engineers full turnkey setups with verified compatibility, optimal DC string voltages, and balanced battery discharge rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#22282a] border-2 border-[#66E8FA] shadow-2xl shadow-[#66E8FA]/15 -translate-y-2"
                  : "bg-[#1f2527] border border-gray-800 hover:border-gray-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#66E8FA] text-[#1B2123] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recommended Choice</span>
                </div>
              )}

              <div>
                <span className="text-xs uppercase font-bold text-[#66E8FA] tracking-wider block mb-1">
                  {pkg.tier}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <span className="inline-block text-xs text-gray-400 bg-[#1B2123] px-3 py-1 rounded-md border border-gray-800 mb-6">
                  {pkg.badge}
                </span>

                {/* Core Hardware Breakdown */}
                <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#1B2123] border border-gray-800/80">
                  <div className="text-xs">
                    <span className="text-gray-400 block font-medium">Inverter:</span>
                    <strong className="text-white">{pkg.inverter}</strong>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400 block font-medium">Storage:</span>
                    <strong className="text-[#66E8FA]">{pkg.battery}</strong>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400 block font-medium">Solar Array:</span>
                    <strong className="text-gray-200">{pkg.solarPV}</strong>
                  </div>
                </div>

                {/* What it powers */}
                <div className="mb-8">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-3">
                    Typical Appliance Capacity:
                  </span>
                  <div className="space-y-2.5">
                    {pkg.powers.map((item, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#66E8FA] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#quote-section"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "bg-[#66E8FA] hover:bg-[#4adbf0] text-[#1B2123] shadow-lg shadow-[#66E8FA]/20"
                      : "bg-[#2C3335] hover:bg-[#374043] text-white border border-gray-700"
                  }`}
                >
                  <span>Select & Request Sizing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

