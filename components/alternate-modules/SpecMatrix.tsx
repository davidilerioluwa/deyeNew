"use client";
import React from "react";

export default function SpecMatrix() {
  const comparisonData = [
    {
      model: "SUN-5K-SG03LP1",
      phase: "1-Phase (230V)",
      acPower: "5,000 W",
      maxPv: "6,500 W",
      battBus: "48V (40-60V)",
      mppt: "2 MPPT (125-425V)",
      transfer: "< 4ms UPS",
      genSync: "Yes (Dry Contact)",
      stock: "In Stock (Lagos)",
    },
    {
      model: "SUN-8K-SG01LP1",
      phase: "1-Phase (230V)",
      acPower: "8,000 W",
      maxPv: "10,400 W",
      battBus: "48V (40-60V)",
      mppt: "2 MPPT (125-425V)",
      transfer: "< 4ms UPS",
      genSync: "Yes (Dry Contact)",
      stock: "In Stock (Lagos & Abuja)",
    },
    {
      model: "SUN-12K-SG04LP3",
      phase: "3-Phase (400V)",
      acPower: "12,000 W",
      maxPv: "15,600 W",
      battBus: "48V (40-60V)",
      mppt: "2 MPPT (200-650V)",
      transfer: "< 4ms UPS",
      genSync: "Yes (ATS Signal)",
      stock: "In Stock (Lagos)",
    },
    {
      model: "SUN-16K-SG01LP1",
      phase: "1-Phase (230V)",
      acPower: "16,000 W",
      maxPv: "20,800 W",
      battBus: "48V (40-60V)",
      mppt: "3 MPPT (150-425V)",
      transfer: "< 4ms UPS",
      genSync: "Yes (ATS Signal)",
      stock: "In Stock (Lagos)",
    },
    {
      model: "SUN-50K-SG01HP3",
      phase: "3-Phase (400V)",
      acPower: "50,000 W",
      maxPv: "65,000 W",
      battBus: "160V – 800V HV",
      mppt: "4 MPPT (150-850V)",
      transfer: "< 4ms UPS",
      genSync: "Yes (Commercial EMS)",
      stock: "Order on Project Schedule",
    },
  ];

  return (
    <section id="specs-matrix" className="w-full bg-[#0a0b0c] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5ff] mb-2">
              [ 05 // SYSTEM SPECIFICATION MATRIX ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              Deye Engineering Datasheet
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md leading-relaxed">
            Side-by-side electrical specifications for system integrators, registered electrical contractors, and corporate facility procurement officers.
          </p>
        </div>

        {/* Tabular Matrix (Responsive Table with Monospace Aesthetics) */}
        <div className="overflow-x-auto border border-white/10 bg-[#0f1112]">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-[#141719] border-b border-white/10 text-gray-400 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-4 px-4 font-bold text-white">Model Number</th>
                <th className="py-4 px-4">Phase Topology</th>
                <th className="py-4 px-4">Rated AC Power</th>
                <th className="py-4 px-4">Max DC Input</th>
                <th className="py-4 px-4">Battery Voltage</th>
                <th className="py-4 px-4">MPPT Range</th>
                <th className="py-4 px-4">UPS Transfer</th>
                <th className="py-4 px-4">Gen Auto-Start</th>
                <th className="py-4 px-4 text-right">Depot Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#00e5ff] whitespace-nowrap">
                    {row.model}
                  </td>
                  <td className="py-4 px-4 text-gray-300 whitespace-nowrap">{row.phase}</td>
                  <td className="py-4 px-4 text-white font-medium whitespace-nowrap">{row.acPower}</td>
                  <td className="py-4 px-4 text-gray-300 whitespace-nowrap">{row.maxPv}</td>
                  <td className="py-4 px-4 text-gray-300 whitespace-nowrap">{row.battBus}</td>
                  <td className="py-4 px-4 text-gray-400 whitespace-nowrap">{row.mppt}</td>
                  <td className="py-4 px-4 text-gray-300 whitespace-nowrap">{row.transfer}</td>
                  <td className="py-4 px-4 text-gray-300 whitespace-nowrap">{row.genSync}</td>
                  <td className="py-4 px-4 text-right font-medium text-white whitespace-nowrap">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-white/10 border border-white/15">
                      {row.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <span>* All models supplied with official Deye Wi-Fi telemetry stick for Deye Cloud monitoring.</span>
          <a
            href="#quote-section"
            className="text-white hover:text-[#00e5ff] transition-colors underline font-bold"
          >
            Need technical system design assistance? Submit load profile →
          </a>
        </div>
      </div>
    </section>
  );
}

