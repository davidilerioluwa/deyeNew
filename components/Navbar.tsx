import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center z-50 bg-gray-100 border-b border-b-gray-400 text-[#015cbb] fixed top-0 left-0 px-6 lg:px-24 py-2">
      <div className="flex items-center gap-3">
        <Image
          src="/callhub-logo.png"
          alt="CallHub Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain rounded"
        />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 leading-none">
            <span className="font-bold text-2xl text-[#22282a] tracking-tight">callhub</span>
            <span className="text-gray-400 font-light text-xl">/</span>
            <span className="font-bold text-2xl text-[#015cbb] tracking-tight uppercase">deye</span>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 font-medium mt-1 leading-tight">
            Independent Deye Equipment Supplier &amp; Installer
          </span>
        </div>
      </div>
      <a href="#quote-section">
        <span className="font-bold text-lg hover:underline underline-offset-4 transition-all">
          Contact Us
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
