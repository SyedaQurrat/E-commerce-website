'use client';
import React from "react";
import Image from "next/image";

interface CardProps {
  icon: string; // Icon path
  title: string; // Card title
  description: string; // Card description
}

const Card3 = ({ icon, title, description }: CardProps) => {
  return (
    <div className="bg-white w-[270px] h-[320px] shadow-lg flex flex-col items-center text-center px-4 py-6">
      {/* Icon */}
      <div className="w-[65px] h-[65px] mb-4 relative">
        <Image
          src={icon}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#151875] font-josefin text-[22px] leading-[25.78px] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#1A0B5B4D] font-lato font-bold text-[14px] leading-[25.6px]">
        {description}
      </p>
    </div>
  );
};

export default Card3;
