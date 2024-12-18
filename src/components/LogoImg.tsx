'use client';
import Image from 'next/image';

export default function LogoImg() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <Image
        src="/media-filess/logoImage.png" 
        alt="Logo"
        className="object-contain"
        width={904} // Original width for large screens
        height={93} // Original height for large screens
        // Responsive sizing
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 904px"
      />
    </div>
  );
}
