"use client";
import React from "react";

export default function TopBanner() {
  return (
    <aside aria-label="Inventory Status" className="w-full bg-[#0a0b0c] border-b border-white/10 text-[11px] font-mono text-gray-400 py-2 px-4 z-40 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-white font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse"></span>
            CALLHUB ENERGY STORE
          </span>
          <span className="text-gray-600">//</span>
          <span className="text-gray-400">
            Authorized Genuine Deye Inverters, ESS & Climate Hardware
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <span>Lagos & Abuja Warehouses</span>
          <span className="text-gray-600">//</span>
          <a
            href="tel:09134280508"
            className="text-[#00e5ff] hover:underline"
          >
            Direct Desk: 09134280508
          </a>
        </div>
      </div>
    </aside>
  );
}
