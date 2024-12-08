import Image from "next/image";

const Card5 = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="w-[420px] h-[270px] bg-[#FFF6FB] flex flex-col justify-center items-center relative">
      {/* Content */}
      <h2 className="font-josefin font-semibold text-[26px] leading-[26px]  text-[#151875] w-[269px] mb-28">
        23% off in all products
      </h2>
      <p className="font-lato font-semibold text-[16px] leading-[19.2px] text-[#FB2E86] underline mb-24">
        Shop Now
      </p>

      {/* Image Section */}
      <div className="absolute w-[213px] h-[207px] bottom-0 right-0">
        <Image
          src={imgSrc} // Dynamically received image source
          alt="Product Image"
          width={213}
          height={207}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Card5;
