'use client';
import Image from 'next/image';

export default function Newsletter() {
  return (
    <div className="relative w-full h-[462px] bg-cover bg-center" style={{ backgroundImage: "url('/images/NewsLater.png')" }}>
      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        {/* Heading */}
        <h2 className="w-full max-w-[574px] font-josefin text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[36px] sm:leading-[40px] md:leading-[48px] lg:leading-[54.25px] tracking-[0.015em] text-[#151875]">
          Get Latest Update By Subscribing Our Newsletter
        </h2>

        {/* Button */}
        <button className="mt-4 bg-[#FB2E86] text-white font-josefin text-[14px] sm:text-[16px] py-2 px-6 sm:py-3 sm:px-8  hover:bg-[#e02475] transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

