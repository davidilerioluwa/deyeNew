"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppQuickContact() {
  const whatsappNumber = "2349134280508";
  const defaultMessage = encodeURIComponent(
    "Hello CallHub Energy, I am inquiring about genuine Deye inverters and battery storage from your store."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Direct Support" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#0a0b0c] hover:bg-[#141719] text-white border border-white/20 hover:border-[#00e5ff] px-4 py-3 rounded-none shadow-2xl transition-all font-mono text-xs group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="font-semibold tracking-wider">WHATSAPP DESK</span>
      </a>
    </aside>
  );
}

