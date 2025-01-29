// 'use client';
// import Card from "@/components/Card-4";
// export default function TopCategories() {
//   // Card4 data
//   const cards = [
//     {
//       imgSrc: "/media-files/miniLCW-Chair-1.png",
//       title: "Mini LCW Chair",
//       code: "Code - Y523201",
//       price: "$42.00",
//     },
//     {
//       imgSrc: "/media-files/miniLCW-Chair-2.png",
//       title: "Mini LCW Chair",
//       code: "Code - Y523201",
//       price: "$42.00",
//     },
//     {
//       imgSrc: "/media-files/miniLCW-Chair-3.png",
//       title: "Mini LCW Chair",
//       code: "Code - Y523201",
//       price: "$42.00",
//     },
//     {
//       imgSrc: "/media-files/miniLCW-Chair-4.png",
//       title: "Mini LCW Chair",
//       code: "Code - Y523201",
//       price: "$42.00",
//     },
//   ];

//   return (
//     <section className="mt-[50px]">
//       {/* Section Title */}
//       <div className="text-center">
//         <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
//         Trending Products
//         </h2>
//       </div>

//       {/* Card4 Row */}
//       <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
    
//     </section>
//   );
// }




'use client';
import Card from "@/components/Cards/Card-4";

export default function TopCategories() {
  // Card4 data
  const cards = [
    {
      imgSrc: "/media-files/miniLCW-Chair-1.png",
      title: "Mini LCW Chair",
      price: "$42.00",
      isRounded: true, // Card with rounded-full shape
    },
    {
      imgSrc: "/media-files/miniLCW-Chair-2.png",
      title: "Mini LCW Chair",
      isRounded: true, 
      price: "$42.00",
    },
    {
      imgSrc: "/media-files/miniLCW-Chair-3.png",
      title: "Mini LCW Chair",
      isRounded: true, // Card with rounded-full shape
      price: "$42.00",
    },
    {
      imgSrc: "/media-files/miniLCW-Chair-4.png",
      title: "Mini LCW Chair",
      isRounded: true,
      price: "$42.00",
    },
  ];

  return (
    <section className="mt-[50px]">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
        Top Categories
        </h2>
      </div>

      {/* Card4 Row */}
      <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
