// 'use client';
// import { TbTruckDelivery } from "react-icons/tb";
// import { GiCash } from "react-icons/gi";

// import Card2 from "@/components/Card-3";
// import React from "react";

// const ShopexOffer = () => {
//   // List of card data
//   const cardData = [
//     {
//       icon: <TbTruckDelivery/>,
//       title: "Free Delivery",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     },
//     {
//       icon: "#",
//       title: <GiCash />
//       ,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     },
//     {
//       icon: "#",
//       title: "Premium Quality",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     },
//     {
//       icon: "#",
//       title: "24 Hours Support",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     },
//   ];

//   return (
//     <section className="my-16">
//       {/* Title */}
//       <h2 className="text-[#151875] font-josefin text-[42px] leading-[49.22px] text-center mb-8">
//         What Shopex Offer!
//       </h2>

//       {/* Cards */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
//         {cardData.map((card, index) => (
//           <Card2
//             key={index}
//             icon={card.icon}
//             title={card.title}
//             description={card.description}
//           />
//         ))}
//       </div> */}
//     </section>
//   );
// };

// export default ShopexOffer;






'use client';

import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import React from "react";

const ShopexOffer = () => {
  // List of card data with React icons
  const cardData = [
    {
      icon: <TbTruckDelivery className="text-4xl text-[#FB2E86]" />,
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl text-[#FB2E86]" />,
      title: "Cash Back",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: <AiOutlineStar className="text-4xl text-[#FB2E86]" />,
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      icon: <MdSupportAgent className="text-4xl text-[#FB2E86]" />,
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

  
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {cardData.map((card, index) => (
          <Card2
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div> */}
    </section>
  );
};

export default ShopexOffer;
