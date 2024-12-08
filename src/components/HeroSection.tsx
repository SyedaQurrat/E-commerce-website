
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-20">
      {/* First Div - Hero Lamp Image */}
      <div className="relative w-[387px] h-[387px] bg-[#F2F0FF]">
        <Image
          src="/images/Hero-Lamp.png"
          alt="Hero Lamp"
          width={387}
          height={387}
          className="object-contain"
        />
      </div>

      {/* Second Div - Content */}
      <div className="w-full lg:w-[644px] h-auto text-left mt-8 lg:mt-0">
        <h3 className="font-lato font-bold text-[16px] leading-[28px] text-[#FB2E86]">
          Best Furniture For Your Castle....
        </h3>
        <h1 className="font-josefin text-[53px] leading-[81.98px] text-[#000000] mt-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="font-lato text-[16px] leading-[28px] text-[#8A8FB9] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper eros nec purus feugiat, eget laoreet justo tempus.
        </p>
        <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold text-[16px] rounded-[2px] mt-8">
          Shop Now
        </button>
      </div>

      {/* Third Div - Hero Image and Discount */}
      <div className="relative w-[706px]  mt-86 lg:mt-0  bg-[#ECD2FA59] rounded-full">
        {/* Hero Image */}
        <Image
          src="/images/hero-1.png"
          alt="Hero Image"
          width={706}
          height={400}
          className="object-contain rounded-lg"
        />
        {/* Discount Badge */}
        <div className="absolute top-4 right-4 w-[90.56px] h-[90.49px] bg-[#00C1FE] border border-[#00C1FE] rounded-full flex items-center justify-center">
          <p className="text-[#FFFFFF] font-josefin text-[15px] leading-[43.89px] text-center">
            50% Off
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
