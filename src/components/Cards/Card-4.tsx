
'use client';
import Image from 'next/image';

interface Card4Props {
  imgSrc: string; // Image source is required
  title?: string; // Optional title
  code?: string;  // Optional code
  price?: string; // Optional price
  isRounded?: boolean; // Optional prop to make the card rounded
}

export default function Card4({ imgSrc, title, code, price, isRounded }: Card4Props) {
  return (
    <div
      className={`flex flex-col items-center h-[361px] w-[270px] sm:w-[220px] md:w-[250px] lg:w-[270px] ${
        isRounded ? 'rounded-full overflow-hidden' : ''
      }`} // Dynamically apply rounded-full if isRounded is true
    >
      {/* Image Section */}
      <div
        className={`w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center ${
          isRounded ? 'rounded-full' : ''
        }`} 
      >
        <Image
          src={imgSrc}
          alt={title || 'Product Image'}
          width={200}
          height={200}
          className={isRounded ? 'rounded-full' : ''} 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full h-[125px]">
        {/* Title (optional) */}
        {title && (
          <h3 className="font-lato font-bold text-[18px] leading-[21.6px] text-[#FB2E86]">
            {title}
          </h3>
        )}

        {/* Code (optional) */}
        {code && (
          <p className="font-josefin text-[14px] leading-[16.41px] text-[#151875] mt-2">
            {code}
          </p>
        )}

        {/* Price (optional) */}
        {price && (
          <p className="font-lato text-[14px] font-normal leading-[16.8px] text-[#151875] mt-2">
            {price}
          </p>
        )}
      </div>
    </div>
  );
}
