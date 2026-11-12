"use client";
import React, { useState } from "react";

interface Appliance {
  id: string;
  name: string;
  ratingWatts: number;
  qty: number;
  category: "heavy" | "medium" | "light";
}

export default function LoadEstimator() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: "ac1", name: "1.5HP Inverter Air Conditioner", ratingWatts: 1100, qty: 1, category: "heavy" },
    { id: "ac2", name: "1.0HP Inverter Air Conditioner", ratingWatts: 800, qty: 0, category: "heavy" },
    { id: "pump", name: "Borehole Water Pumping Machine (1HP)", ratingWatts: 1200, qty: 0, category: "heavy" },
    { id: "fridge", name: "Double-Door Refrigerator / Freezer", ratingWatts: 350, qty: 1, category: "medium" },
    { id: "deepfreeze", name: "Deep Chest Freezer", ratingWatts: 450, qty: 0, category: "medium" },
    { id: "tv", name: "Smart TV + Soundbar + Decoder", ratingWatts: 200, qty: 2, category: "light" },
    { id: "workstation", name: "Office Workstation / Laptops / Wi-Fi", ratingWatts: 150, qty: 2, category: "light" },
    { id: "lights", name: "LED Lighting Points (Whole House)", ratingWatts: 120, qty: 1, category: "light" },
  ]);

  const updateQty = (id: string, delta: number) => {
    setAppliances((prev) =>
      prev.map((app) => {
        if (app.id === id) {
          const newQty = Math.max(0, app.qty + delta);
          return { ...app, qty: newQty };
        }
        return app;
      })
    );
  };

  const totalRunningWatts = appliances.reduce((acc, app) => acc + app.ratingWatts * app.qty, 0);
  const totalKw = (totalRunningWatts / 1000).toFixed(1);

  // Engineering recommendation logic
  let recommendedInverter = "Deye 5kW Hybrid (SUN-5K-SG03LP1)";
  let recommendedBatteries = "1x Deye RW-M6.1 (5.12kWh LiFePO4)";
  let recommendedPanels = "6x – 8x 585W Monocrystalline PV Panels";
  let backupTime = "Approx. 8 – 12 hours night backup";

  if (totalRunningWatts > 3800 && totalRunningWatts <= 6500) {
    recommendedInverter = "Deye 8kW Hybrid (SUN-8K-SG01LP1)";
    recommendedBatteries = "2x Deye RW-M6.1 (10.24kWh Total LiFePO4)";
    recommendedPanels = "12x – 16x 585W Monocrystalline PV Panels";
    backupTime = "Approx. 10 – 14 hours night backup with air conditioning";
  } else if (totalRunningWatts > 6500 && totalRunningWatts <= 10000) {
    recommendedInverter = "Deye 12kW Three-Phase Hybrid (SUN-12K-SG04LP3)";
    recommendedBatteries = "3x to 4x Deye RW-M6.1 (15.36kWh – 20.48kWh)";
    recommendedPanels = "18x – 24x 585W Monocrystalline PV Panels";
    backupTime = "Continuous full-facility 24/7 commercial autonomy";
  } else if (totalRunningWatts > 10000) {
    recommendedInverter = "Deye 16kW Single-Phase or 50kW High-Voltage Hybrid";
    recommendedBatteries = "Deye BOS-G High-Voltage Rack (30kWh – 60kWh+)";
    recommendedPanels = "30x+ 585W Heavy Commercial Solar PV Array";
    backupTime = "Industrial 24/7 uninterrupted operation with auto generator sync";
  }

  return (
    <section className="w-full bg-[#141719] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-2">
              [ 07 // INTERACTIVE LOAD SIZING TOOL ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              System Sizing Calculator
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md leading-relaxed">
            Select your facility appliances to estimate continuous wattage and determine the exact Deye inverter, battery storage, and solar panel configuration needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Appliance Checklist with Counter Buttons */}
          <div className="lg:col-span-7 bg-[#0f1112] border border-white/10 p-6 sm:p-8">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-4">
              Select Operating Appliances:
            </span>

            <div className="space-y-3 font-mono text-xs">
              {appliances.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-3.5 bg-[#141719] border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-xs sm:text-sm font-sans">{app.name}</span>
                    <span className="text-[11px] text-gray-500">
                      ~{app.ratingWatts}W per unit
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQty(app.id, -1)}
                      className="w-8 h-8 rounded bg-[#0a0b0c] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center font-bold text-sm"
                    >
                      –
                    </button>
                    <span className="w-6 text-center font-bold text-white text-sm">
                      {app.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(app.id, 1)}
                      className="w-8 h-8 rounded bg-[#0a0b0c] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sizing Recommendation Terminal */}
          <div className="lg:col-span-5 bg-[#0a0b0c] border border-white/10 p-6 sm:p-8 flex flex-col justify-between font-mono">
            <div>
              <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-6">
                <span className="text-xs uppercase text-gray-500">ESTIMATED RUNNING LOAD</span>
                <span className="text-3xl font-bold text-[#00e5ff] font-sans">
                  {totalKw} kW <span className="text-xs text-gray-400 font-mono">({totalRunningWatts}W)</span>
                </span>
              </div>

              <span className="text-xs uppercase text-[#00e5ff] block mb-3">
                [ RECOMMENDED HARDWARE SIZING ]
              </span>

              <div className="space-y-4 mb-8 text-xs">
                <div className="p-4 bg-[#141719] border border-white/10">
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">INVERTER RECOMMENDATION:</span>
                  <strong className="text-white text-sm font-sans block">{recommendedInverter}</strong>
                </div>

                <div className="p-4 bg-[#141719] border border-white/10">
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">BATTERY STORAGE BANK:</span>
                  <strong className="text-white text-sm font-sans block">{recommendedBatteries}</strong>
                </div>

                <div className="p-4 bg-[#141719] border border-white/10">
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">ROOFTOP SOLAR ARRAY:</span>
                  <strong className="text-gray-300 text-sm font-sans block">{recommendedPanels}</strong>
                </div>

                <div className="p-3 bg-[#141719] border border-white/5 text-[11px] text-gray-400">
                  AUTONOMY EXPECTATION: <span className="text-white">{backupTime}</span>
                </div>
              </div>
            </div>

            <a
              href="#quote-section"
              className="w-full bg-white hover:bg-gray-200 text-[#0f1112] font-mono text-xs uppercase tracking-wider font-bold py-4 text-center transition-colors block"
            >
              Inquire This Sizing at Quote Desk [→]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

