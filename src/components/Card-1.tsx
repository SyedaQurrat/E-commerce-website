'use client';
import Image from 'next/image';

export default function Card({ imgSrc, title, code, price }: { imgSrc: string; title: string; code: string; price: string }) {
  return (
    <div className="flex flex-col items-center h-[361px] w-[270px] sm:w-[220px] md:w-[250px] lg:w-[270px]">
      {/* Image Section */}
      <div className="w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center relative">
        <Image 
          src={`/media-files/${imgSrc}`} // Updated path for images
          alt={title} 
          width={200} 
          height={200} 
          className="object-contain" // Image styling ke liye
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px" // Performance optimization ke liye
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full h-[125px]">
        {/* Title */}
        <h3 className="font-lato font-bold text-[18px] leading-[21.6px] text-[#FB2E86]">{title}</h3>

        {/* Color Lines */}
        <div className="flex gap-2 mt-2">
          <div className="w-4 h-[4px] bg-[#A2A4FF]"></div>
          <div className="w-4 h-[4px] bg-[#FB2E86]"></div>
          <div className="w-4 h-[4px] bg-[#0001FE]"></div>
        </div>

        {/* Code */}
        <p className="font-josefin text-[14px] leading-[16.41px] text-[#151875] mt-2">{code}</p>

        {/* Price */}
        <p className="font-lato text-[14px] font-normal leading-[16.8px] text-[#151875] mt-2">{price}</p>
      </div>
    </div>
  );
}

