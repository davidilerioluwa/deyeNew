"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I verify that my Deye equipment from CallHub is 100% genuine?",
      a: "Every single Deye inverter, battery, and air conditioner delivered by CallHub comes sealed in original manufacturer packaging with an official tamper-proof serial number barcode. You can register and verify this serial directly on the official Deye Cloud telemetry platform (available on iOS, Android, and web).",
    },
    {
      q: "How does the CallHub warranty work in Nigeria?",
      a: "CallHub provides direct distributor warranty backing (5 years on inverters, up to 10 years on lithium battery cells). In the rare event of a hardware fault, you do not have to ship equipment abroad; our local Nigerian engineering facility handles diagnostics, component replacements, and warranty swaps directly.",
    },
    {
      q: "Can the Deye Hybrid Inverter automatically start my diesel or petrol generator?",
      a: "Yes. Deye hybrid inverters feature a built-in dry contact ATS (Automatic Transfer Switch) signal. When battery state-of-charge drops below your programmed threshold, the inverter sends a start signal to your auto-start generator, charges the battery, and turns the generator off automatically when full.",
    },
    {
      q: "Can the Deye Solar Air Conditioner run without batteries or grid during the day?",
      a: "Yes! The Deye Hybrid AC/DC solar air conditioner connects directly to rooftop solar panels via its dedicated DC terminals. On sunny days, it draws 100% of its power from the sun to cool your rooms without requiring batteries or consuming grid power.",
    },
    {
      q: "Do you ship and install outside Lagos and Abuja?",
      a: "Yes. CallHub coordinates palletized, insured logistics across all 36 states in Nigeria (Port Harcourt, Ibadan, Kano, Enugu, Calabar, Benin, etc.). We also provide certified installation engineering teams or remote commissioning support for your local electrician.",
    },
    {
      q: "Why buy through CallHub rather than an unverified open market vendor?",
      a: "Open market electronics markets often circulate refurbished, gray-market, or firmware-locked units without manufacturer warranty support. CallHub guarantees authentic factory-fresh units, official firmware updates, localized engineering consultations, and corporate invoices.",
    },
  ];

  return (
    <section className="w-full bg-[#1e2426] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#66E8FA] mb-2">
            <HelpCircle className="w-4 h-4 text-[#66E8FA]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Clear answers about warranty coverage, equipment authenticity, and system capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#22282a] border border-gray-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-[#1B2123] text-[#66E8FA] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#66E8FA]/15" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-[#22282a] border border-gray-800">
          <span className="text-sm text-gray-300 block mb-3">
            Have a custom technical inquiry for your facility?
          </span>
          <a
            href="tel:09134280508"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#66E8FA] hover:underline"
          >
            <span>Call Our Technical Desk at 09134280508</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

