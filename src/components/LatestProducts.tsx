'use client';
import Card2 from "@/components/Card-2";

const LatestProducts = () => {
    // List of image sources
    const images = [
      "/images/CantileverChair-1.png",
      "/images/CantileverChair-2.png",
      "/images/CantileverChair-3.png",
      "/images/CantileverChair-4.png",
      "/images/CantileverChair-5.png",
      "/images/CantileverChair-6.png",
    ];
  
    return (
      <section className="my-16">
        {/* Title */}
        <h2 className="text-[#151875] font-josefin text-[42px] leading-[49.22px] text-center mb-8">
          Leatest Products
        </h2>
  
        {/* Categories */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-[#FB2E86] font-lato text-[18px]">New Arrival</span>
            <div className="w-[93px] h-[2px] bg-[#FB2E86] mt-2"></div>
          </div>
          <span className="text-[#151875] font-lato text-[18px]">Best Seller</span>
          <span className="text-[#151875] font-lato text-[18px]">Featured</span>
          <span className="text-[#151875] font-lato text-[18px]">Special Offer</span>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
          {images.map((imageSrc, index) => (
            <Card2 key={index} imageSrc={imageSrc} />
          ))}
        </div>
      </section>
    );
  };
  
  export default LatestProducts;