import Image from 'next/image';

const DiscountItem = () => {
  return (
    <section className="container mx-auto my-20 px-4">
      {/* Caption Title */}
      <h2 className="font-josefin text-[#151875] text-2xl md:text-3xl lg:text-4xl leading-[49.22px] text-center">
        Discount Item
      </h2>

      {/* Border Section */}
      <div className="flex justify-center items-center mt-6 border-t border-[#151875] space-x-8">
        <a href="#" className="font-lato text-[18px] text-[#FB2E86] underline decoration-underline leading-[21.6px]">
          Wood Chair.
        </a>
        <a href="#" className="font-lato text-[18px] text-[#151875] leading-[21.6px]">
          Plastic Chair
        </a>
        <a href="#" className="font-lato text-[18px] text-[#151875] leading-[21.6px]">
          Sofa Collection
        </a>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-16">
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="font-josefin text-[#151875] text-2xl lg:text-[35px] leading-[46.2px] tracking-[1.5%]">
            20% Discount Of All Products
          </h3>
          <h4 className="font-josefin text-[#FB2E86] text-lg lg:text-[21px] leading-[27.72px] tracking-[1.5%]">
            Eams Sofa Compact
          </h4>
          <p className="font-lato text-[#B7BACB] text-sm lg:text-[17px] leading-[30px] tracking-[2%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features with Ticks */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-4 h-3 border-2 border-[#7569B2] flex-shrink-0"></span>
              <span className="ml-4 font-lato text-[#B8B8DC] text-[16px] leading-[30px] tracking-[2%]">
                Material expose like metals
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-3 border-2 border-[#7569B2] flex-shrink-0"></span>
              <span className="ml-4 font-lato text-[#B8B8DC] text-[16px] leading-[30px] tracking-[2%]">
                Clear lines and geometric figures
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-3 border-2 border-[#7569B2] flex-shrink-0"></span>
              <span className="ml-4 font-lato text-[#B8B8DC] text-[16px] leading-[30px] tracking-[2%]">
                Simple neutral colours
              </span>
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 w-[200px] h-[57px] rounded-[2px] bg-accent text-white font-josefin text-[17px] leading-[19.92px] tracking-[2%]">
            Shop Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 bg-pink-100 rounded-full">
          <Image
            src="/media-files/Discount-Sofa.png"
            alt="Discount Sofa"
            width={699}
            height={597}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
