"use client";
import React from "react";

export default function PartnershipNotice() {
  return (
    <section className="w-full bg-[#0a0b0c] border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-start gap-4 max-w-3xl">
          <div className="w-2 h-2 rounded-full bg-[#00e5ff] mt-1 shrink-0"></div>
          <div>
            <span className="text-white font-bold uppercase tracking-wider block mb-1">
              Authorized Nigerian Channel Partner & Stockist
            </span>
            <p className="text-gray-400 font-sans text-xs leading-relaxed">
              CallHub operates as an authorized independent distributor and technical integration hub for Ningbo Deye Inverter Technology Co., Ltd. products in Nigeria. All inverters, storage batteries, and climate equipment are authentic OEM units backed by direct manufacturer warranty, factory firmware updates, and local RMA servicing.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-400 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 shrink-0">
          <div>
            <span className="text-gray-600 block">LOCAL DEPOTS</span>
            <span className="text-white">Ikeja, Lagos & Abuja FCT</span>
          </div>
          <div>
            <span className="text-gray-600 block">SERVICE LEVEL</span>
            <span className="text-white">Full In-Country RMA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
