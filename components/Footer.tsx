import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 text-white border-t border-white/10 font-sans select-none">
      {/* Upper Footer: Branding & Primary Contact Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Huge Structural Call to Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase text-white font-semibold">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-white">
              Let&apos;s power the future together.
            </h2>
            <p className="text-blue-100 text-sm max-w-md">
              Genuine Deye solar inverters, lithium batteries, and solar climate hardware supplied and integrated across Nigeria by CallHub.
            </p>
          </div>

          {/* Right Column: Contact Metadata Links */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 lg:pt-8 text-sm uppercase font-medium">
            {/* Email Section */}
            <div className="flex flex-col gap-2 border-b border-white/20 pb-4">
              <span className="text-white lowercase font-normal">
                Email Addresses
              </span>
              <a
                href="mailto:sales@callhub.com.ng"
                className="hover:text-white/80 text-lg transition-colors duration-200 normal-case font-semibold"
              >
                sales@callhub.com.ng
              </a>
              <a
                href="mailto:deye@callhub.com.ng"
                className="hover:text-white/80 text-lg transition-colors duration-200 normal-case font-semibold"
              >
                deye@callhub.com.ng
              </a>
            </div>

            {/* Phone Number Section */}
            <div className="flex flex-col gap-2 pb-4">
              <span className="text-white lowercase font-normal">
                Phone Numbers
              </span>
              <a
                href="tel:09134280508"
                className="hover:text-white/80 text-lg transition-colors duration-200 normal-case font-semibold"
              >
                09134280508
              </a>
              <a
                href="tel:09138975362"
                className="hover:text-white/80 text-lg transition-colors duration-200 normal-case font-semibold"
              >
                09138975362
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Line avoiding copyright & trademark infringement */}
        <div className="mt-12 pt-8 border-t border-white/20 text-xs text-blue-200/80 leading-relaxed font-sans">
          <p>
            <strong>Trademark &amp; Regulatory Notice:</strong> CallHub Nigeria (CallHub Technologies Ltd) is an independent Deye equipment supplier, stockist, and installation contractor for genuine clean energy systems. CallHub operates as an independent company and is not an official direct corporate partner, subsidiary, or exclusive franchisee of Ningbo Deye Inverter Technology Co., Ltd. 
            <strong> Deye®</strong> and associated product logos are registered trademarks of their respective owner.
          </p>
        </div>
      </div>
    </footer>
  );
}
