"use client";
import Image from "next/image";
import React from "react";

const ShopexOffer = () => {
  // List of card data with image paths
  const cardData = [
    {
      imgSrc: "/media-files/truck.jpeg",
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      imgSrc: "/media-files/cashDelivery.jpeg",
      title: "Cash Back",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      imgSrc: "/media-files/quality.jpeg",
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      imgSrc: "/media-files/24hrs.jpeg",
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
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            {/* Image */}
            <Image
              src={card.imgSrc}
              alt={card.title}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            {/* Title */}
            <h3 className="text-[#151875] font-medium text-lg mb-2">
              {card.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopexOffer;



