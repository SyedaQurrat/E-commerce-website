"use client";
import { RiArrowDropDownLine, RiHeartLine, RiShoppingCartLine, RiMailLine, RiPhoneLine } from 'react-icons/ri';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header className="bg-[#7E33E0] w-full max-w-[1920px] h-[44px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Left Side */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Email */}
        <div className="flex items-center gap-2">
          <RiMailLine className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            mhhasanul@gmail.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <RiPhoneLine className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            (12345) 67890
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <span className="text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            English
          </span>
          <RiArrowDropDownLine className="w-3 h-3  sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Currency Selector */}
        <div className="flex items-center gap-2">
          <span className="text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            USD
          </span>
          <RiArrowDropDownLine className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Login */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            Login
          </span>
          <CgProfile  className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Wishlist */}
        <div className="flex items-center gap-2">
          <RiHeartLine className="w-4 h-4 text-white" />
          <span className="hidden lg:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            Wishlist
          </span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-2">
          <RiShoppingCartLine className="w-4 h-4 sm:w-[17.5px] sm:h-[17.5px] text-white" />
        </div>
      </div>
    </header>
  );
}

