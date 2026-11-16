import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-300 text-[#015cbb] fixed top-0 left-0 px-4 sm:px-8 lg:px-24 py-2 sm:py-2.5 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Image
            src="/callhub-full-logo.png"
            alt="CallHub Logo"
            width={96}
            height={31}
            className="h-6 sm:h-7 w-auto object-contain shrink-0"
            priority
          />
          <span className="text-gray-400 font-light text-base sm:text-xl">/</span>
          <span className="font-bold text-lg sm:text-2xl text-[#015cbb] tracking-tight uppercase leading-none">
            deye
          </span>
        </div>

        <a href="#quote-section" className="shrink-0">
          <span className="font-bold text-sm sm:text-base hover:underline underline-offset-4 whitespace-nowrap">
            Contact Us
          </span>
        </a>
      </div>

      <div className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
        Independent Deye Equipment Supplier &amp; Installer
      </div>
    </nav>
  );
};

export default Navbar;
