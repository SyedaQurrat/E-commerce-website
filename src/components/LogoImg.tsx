'use client';
import Image from 'next/image';

export default function LogoImg() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <Image
        src="/media-files/logoImage.png" 
        alt="Logo"
        className="object-contain"
        width={904} 
        height={93} 
        // Responsive sizing
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 904px"
      />
    </div>
  );
}
