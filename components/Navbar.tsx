import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-300 text-[#015cbb] fixed top-0 left-0 px-4 sm:px-8 lg:px-24 py-2 sm:py-2.5 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/callhub-icon.png"
            alt="CallHub Icon"
            width={34}
            height={30}
            className="w-8 h-7 sm:w-9 sm:h-8 object-contain shrink-0"
            priority
          />
          <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
            <span className="font-bold text-xl sm:text-2xl text-[#22282a] tracking-tight">callhub</span>
            <span className="text-gray-400 font-light text-lg sm:text-xl">/</span>
            <span className="font-bold text-xl sm:text-2xl text-[#015cbb] tracking-tight uppercase">deye</span>
          </div>
        </div>

        <a href="#quote-section" className="shrink-0">
          <span className="font-bold text-sm sm:text-base hover:underline underline-offset-4 whitespace-nowrap">
            Contact Us
          </span>
        </a>
      </div>

      <div className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5 sm:mt-1 pl-10 sm:pl-12">
        Independent Deye Equipment Supplier &amp; Installer
      </div>
    </nav>
  );
};

export default Navbar;
