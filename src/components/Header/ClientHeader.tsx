"use client";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function ClientHeader() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

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
    </div>
  );
}
