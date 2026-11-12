"use client";
import React from "react";
import { ShieldCheck, Wrench, Truck, Headphones, BadgeCheck, FileCheck } from "lucide-react";

export default function WhyChooseCallHub() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#66E8FA]" />,
      title: "100% Genuine Hardware Only",
      description:
        "Every Deye inverter, battery, and air conditioner supplied by CallHub carries authentic OEM serials directly verifiable through Deye Cloud. Say no to gray-market clones.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#66E8FA]" />,
      title: "Active Manufacturer Warranty",
      description:
        "Enjoy up to 5-10 years of hassle-free manufacturer warranty coverage backed by CallHub's direct channel partnership and local RMA turnaround.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#66E8FA]" />,
      title: "Engineered System Sizing",
      description:
        "Don't guess your solar and battery requirements. Our experienced solar electrical engineers calculate your exact kilowatt-hour loads to avoid under-sizing or wasted expenditure.",
    },
    {
      icon: <Truck className="w-8 h-8 text-[#66E8FA]" />,
      title: "Nationwide Protected Logistics",
      description:
        "We securely ship palletized solar inverters and lithium storage systems directly to residential and commercial project sites across all 36 Nigerian states.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#66E8FA]" />,
      title: "Dedicated After-Sales Hotline",
      description:
        "Direct access to technical assistance, firmware updates, and troubleshooting from local engineers who understand the nuances of the Nigerian power grid.",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#66E8FA]" />,
      title: "Transparent Corporate Procurement",
      description:
        "Official commercial invoices, tax receipts, and compliance documentation for corporate, public, and institutional clean energy tenders.",
    },
  ];

  return (
    <section id="why-callhub" className="w-full bg-[#22282a] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#66E8FA] mb-2">
            <span>CallHub Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Why Procure Deye Systems Through CallHub?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Investing in clean energy is a decade-long commitment. CallHub bridges world-class Deye technology with localized engineering integrity, warranty security, and rapid customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#1B2123] rounded-2xl p-8 border border-gray-800 hover:border-[#66E8FA]/30 transition-all hover:translate-y-[-2px] group"
            >
              <div className="p-3.5 bg-[#22282a] rounded-xl w-fit mb-6 border border-gray-800 group-hover:border-[#66E8FA]/40 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#66E8FA] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

