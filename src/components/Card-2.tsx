import Image from "next/image";

interface CardProps {
  imageSrc: string; // Image source passed as prop
}

const Card2 = ({ imageSrc }: CardProps) => {
  return (
    <div className="bg-[#F7F7F7] w-[360px] h-[306px] flex flex-col items-center">
      {/* Image Section */}
      <div className="w-[360px] h-[269px] relative">
        <Image
          src={imageSrc}
          alt="Product Image"
          layout="fill" // Ensures image fills the parent div
          objectFit="contain" // Prevents cropping
          className="rounded-t-lg" // Optional styling
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center w-full px-4 mt-2">
        {/* Left Content */}
        <span className="text-[#151875] font-lato text-[16px] font-semibold">
          Comfort Handy Craft
        </span>

        {/* Right Content */}
        <div className="text-right">
          <p className="text-[#151875] font-josefin text-[14px]">$42.00</p>
          <p className="text-[#FB2448] font-josefin text-[12px] line-through">$65.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
