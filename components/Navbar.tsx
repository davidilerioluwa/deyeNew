import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center z-50 bg-gray-100 border-b border-gray-300 text-[#015cbb] fixed top-0 left-0 px-3 sm:px-6 lg:px-24 py-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Image
          src="/callhub-logo.png"
          alt="CallHub Logo"
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded shrink-0"
          priority
        />
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
            <span className="font-bold text-lg sm:text-2xl text-[#22282a] tracking-tight">callhub</span>
            <span className="text-gray-400 font-light text-base sm:text-xl">/</span>
            <span className="font-bold text-lg sm:text-2xl text-[#015cbb] tracking-tight uppercase">deye</span>
          </div>
          <span className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5 sm:mt-1 leading-tight truncate sm:whitespace-normal">
            Independent Deye Equipment Supplier &amp; Installer
          </span>
        </div>
      </div>
      <a href="#quote-section" className="shrink-0 ml-2">
        <span className="font-bold text-xs sm:text-base hover:underline underline-offset-4 whitespace-nowrap">
          Contact Us
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
