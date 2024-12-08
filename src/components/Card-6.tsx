import Image from "next/image";

const Card6 = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="flex items-center w-[270px] h-[74px] bg-[#F5F6F8] p-4">
      {/* Image */}
      <div className="w-[107px] h-[74px] bg-[#F5F6F8] flex-shrink-0">
        <Image
          src={imgSrc} // Dynamically received image source
          alt="Product Image"
          width={107}
          height={74}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="ml-4 flex flex-col">
        {/* Title */}
        <p className="font-josefin text-[16px] leading-[18.75px] text-[#151875]">
          Executive Chair
        </p>

        {/* Price */}
        <p className="font-josefin text-[12px] leading-[12px] text-[#151875] line-through mt-1">
          $32.00
        </p>
      </div>
    </div>
  );
};

export default Card6;
