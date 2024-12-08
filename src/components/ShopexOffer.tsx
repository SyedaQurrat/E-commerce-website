// import Card2 from "@/components/Card-3";
// import React from "react";

// const ShopexOffer = () => {
//     // List of image sources
//     const cardData = [
      
//     ];
  
//     return (
//       <section className="my-16">
//         {/* Title */}
//         <h2 className="text-[#151875] font-josefin text-[42px] leading-[49.22px] text-center mb-8">
//           What Shopex Offer!
//         </h2>

  
//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
//           {images.map((imageSrc, index) => (
//             <Card2 key={index} imageSrc={imageSrc} />
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default ShopexOffer;


import Card2 from "@/components/Card-3";
import React from "react";

const ShopexOffer = () => {
  // List of card data
  const cardData = [
    {
      icon: "/icons/free-delivery.png",
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: "/icons/cash-back.png",
      title: "Cash Back",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: "/icons/premium-quality.png",
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: "/icons/24-hours-support.png",
      title: "24 Hours Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
  ];

  return (
    <section className="my-16">
      {/* Title */}
      <h2 className="text-[#151875] font-josefin text-[42px] leading-[49.22px] text-center mb-8">
        What Shopex Offer!
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {cardData.map((card, index) => (
          <Card2
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopexOffer;
