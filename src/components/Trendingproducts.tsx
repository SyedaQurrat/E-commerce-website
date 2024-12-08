import Card from "@/components/Card-4";
import Card5 from "@/components/Card-5";
import Card6 from "@/components/Card-6";

export default function TrendingProducts() {
  // Card4 data
  const cards = [
    {
      imgSrc: "/images/Cantilever-chair-5.png",
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imgSrc: "/images/Cantilever-chair-9.png",
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imgSrc: "/images/Cantilever-chair-7.png",
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imgSrc: "/images/Cantilever-chair-8.png",
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  // Card5 data
  const card5Data = [
    {
      imgSrc: "/images/Products-1.png",
    },
    {
      imgSrc: "/images/Products-2.png",
    },
  ];

  // Card6 data
  const card6Data = {
    imgSrc: "/images/ExecutiveSeat-1chair.png",
  };

  return (
    <section className="mt-[50px]">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
          Featured Products
        </h2>
      </div>

      {/* Card4 Row */}
      <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Card5 and Card6 Row */}
      
      <div className="flex flex-wrap justify-center gap-6 mt-[40px]">
        {card5Data.map((data, index) => (
          <Card5 key={index} imgSrc={data.imgSrc} />
        ))}
        <Card6 imgSrc={card6Data.imgSrc} />
      </div>
      
    
    </section>
  );
}
