"use client";
import {
  RiArrowDropDownLine,
  RiHeartLine,
  RiShoppingCartLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const router = useRouter();

  const languages = ["English", "French", "Spanish", "German"];
  const currencies = ["USD", "EUR", "GBP", "INR"];

  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);
  const toggleCurrencyDropdown = () => setIsCurrencyOpen(!isCurrencyOpen);

  const selectLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  const selectCurrency = (curr: string) => {
    setSelectedCurrency(curr);
    setIsCurrencyOpen(false);
  };

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
        <div className="relative">
          <button
            className="flex items-center gap-2 text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]"
            onClick={toggleLanguageDropdown}
          >
            {selectedLanguage}
            <RiArrowDropDownLine className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
          {isLanguageOpen && (
            <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-10">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectLanguage(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Currency Selector */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]"
            onClick={toggleCurrencyDropdown}
          >
            {selectedCurrency}
            <RiArrowDropDownLine className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
          {isCurrencyOpen && (
            <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-10">
              {currencies.map((curr) => (
                <div
                  key={curr}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectCurrency(curr)}
                >
                  {curr}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Login */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/my-account")}
        >
          <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            Login
          </span>
          <CgProfile className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Wishlist */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/wishlist")}
        >
          <RiHeartLine className="w-4 h-4 text-white" />
          <span className="hidden lg:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            Wishlist
          </span>
        </div>

        {/* Cart */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/shoping-curt")}
        >
          <RiShoppingCartLine className="w-4 h-4 sm:w-[17.5px] sm:h-[17.5px] text-white" />
        </div>
      </div>
    </header>
  );
}
