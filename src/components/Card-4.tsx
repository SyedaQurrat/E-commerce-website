'use client';
import Image from 'next/image';

export default function Card4({ imgSrc, title, code, price }: { imgSrc: string; title: string; code: string; price: string }) {
  return (
    <div className="flex flex-col items-center h-[361px] w-[270px] sm:w-[220px] md:w-[250px] lg:w-[270px]">
      {/* Image Section */}
      <div className="w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center">
        <Image src={imgSrc} alt={title} width={200} height={200} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full h-[125px]">
        {/* Title */}
        <h3 className="font-lato font-bold text-[18px] leading-[21.6px] text-[#FB2E86]">{title}</h3>


        {/* Code */}
        <p className="font-josefin text-[14px] leading-[16.41px] text-[#151875] mt-2">{code}</p>

        {/* Price */}
        <p className="font-lato text-[14px] font-normal leading-[16.8px] text-[#151875] mt-2">{price}</p>
      </div>
    </div>
  );
}
