'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FeatureSection() {
  const [chairs, setChairs] = useState<
    { 
      name: string; 
      imageUrl: string; 
      price: string; 
      discountedPrice: string; 
      description: string; 
    }[] | null
  >(null);

  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const query = encodeURIComponent(
          `*[_type == "product" && (name in [
            "Tribù Elio Chair", 
            "Rapson Thirty-Nine Guest Chair", 
            "Cozy Armchair", 
            "Matilda Velvet Chair – Pink", 
            "Varmora Plastic Chair Solid", 
            "Futuristic Sleek Modern Chair"
          ])] {
            name,
            "imageUrl": image.asset->url,
            price,
            discountedPrice,
            description
          }`
        );
        const projectId = '9074oi3u'; // Replace with your Sanity project ID
        const dataset = 'production'; // Replace with your dataset name
        const apiVersion = '2023-01-01'; // Adjust based on your Sanity API version
        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.length > 0) {
          const uniqueChairs = data.result.filter(
            (chair: { name: string }, index: number, self: any[]) =>
              index === self.findIndex((c) => c.name === chair.name)
          );
          setChairs(uniqueChairs);
        } else {
          console.error('No chairs found!');
        }
      } catch (error) {
        console.error('Error fetching chairs:', error);
      }
    };

    fetchChairs();
  }, []);

  return (
    <section className="mt-[50px]">
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
          Lattest Products
        </h2>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
        {chairs ? (
          chairs.map((chair, index) => (
            <ChairCard
              key={index}
              name={chair.name}
              imageUrl={chair.imageUrl}
              price={chair.price}
              discountedPrice={chair.discountedPrice}
              description={chair.description}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Loading chairs...</p>
        )}
      </div>
    </section>
  );
}

// ChairCard Component
const ChairCard = ({
  name,
  imageUrl,
  price,
  discountedPrice,
  description,
}: {
  name: string;
  imageUrl: string;
  price: string;
  discountedPrice: string;
  description: string;
}) => {
  return (
    <div className="bg-white w-[300px] h-auto shadow-lg rounded-lg p-4 flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={387}
        height={387}
        className="w-full h-[200px] object-contain rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-4 text-center">{name}</h3>
      <p className="text-gray-600 text-sm mt-2 text-center">{description}</p>
      <p className="text-green-500 font-bold mt-2">Price: ${price}</p>
      <p className="text-accent font-bold mt-2">Discounted: {discountedPrice}</p>
    </div>
  );
};






// import { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';

// interface Chair {
//   name: string;
//   imageUrl: string;
//   price: string;
//   discountedPrice: string;
//   description: string;
// }

// export default function FeatureSection() {
//   const [chairs, setChairs] = useState<Chair[] | null>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const cardsContainerRef = useRef<HTMLDivElement>(null);

//   // GSAP Animations
//   useEffect(() => {
//     if (chairs && chairs.length > 0) {
//       // Title animation
//       gsap.from(titleRef.current, {
//         duration: 1.2,
//         y: 80,
//         opacity: 0,
//         ease: "elastic.out(1, 0.5)",
//         delay: 0.3
//       });

//       // Cards animation with flash effect
//       const cards = cardsContainerRef.current?.children;
//       if (cards) {
//         gsap.fromTo(cards,
//           {
//             opacity: 0,
//             y: 100,
//             scale: 0.8
//           },
//           {
//             duration: 1,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             stagger: 0.15,
//             ease: "back.out(1.7)",
//             onComplete: () => {
//               // Flash effect after initial appearance
//               gsap.to(cards, {
//                 opacity: 0.6,
//                 duration: 0.2,
//                 repeat: 1,
//                 yoyo: true,
//                 stagger: 0.1
//               });
//             }
//           }
//         );
//       }
//     }
//   }, [chairs]);

//   useEffect(() => {
//     const fetchChairs = async () => {
//       try {
//         const query = encodeURIComponent(
//           `*[_type == "product" && name in [
//             "Tribù Elio Chair", 
//             "Rapson Thirty-Nine Guest Chair", 
//             "Cozy Armchair", 
//             "Matilda Velvet Chair – Pink", 
//             "Varmora Plastic Chair Solid", 
//             "Futuristic Sleek Modern Chair"
//           ]] | order(_createdAt desc)[0...6] {
//             name,
//             "imageUrl": image.asset->url,
//             price,
//             discountedPrice,
//             description
//           }`
//         );
//         const projectId = '9074oi3u';
//         const dataset = 'production';
//         const apiVersion = '2023-01-01';
//         const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

//         const response = await fetch(url);
//         const data = await response.json();

//         // Ensure exactly 6 chairs
//         const chairsData = data.result?.slice(0, 6) || [];
//         setChairs(chairsData);
//       } catch (error) {
//         console.error('Error fetching chairs:', error);
//         setChairs([]);
//       }
//     };

//     fetchChairs();
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#F9F8FE] to-[#ffffff]">
//       <div className="text-center mb-12">
//         <h2 ref={titleRef} className="font-josefin text-4xl md:text-5xl font-bold text-[#1A0B5B]">
//           Latest Products
//           <div className="mt-4 w-16 h-1 bg-[#FB2E86] mx-auto rounded-full transform scale-x-125" />
//         </h2>
//       </div>

//       <div ref={cardsContainerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {chairs ? (
//           chairs.map((chair, index) => (
//             <ChairCard
//               key={index}
//               index={index}
//               {...chair}
//             />
//           ))
//         ) : (
//           [...Array(6)].map((_, index) => (
//             <div key={index} className="bg-white rounded-2xl shadow-xl p-4 h-[320px] animate-pulse">
//               <div className="bg-gray-200 h-48 rounded-xl mb-4" />
//               <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
//               <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
//               <div className="h-4 bg-gray-200 rounded w-1/3" />
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }

// const ChairCard = ({ name, imageUrl, price, discountedPrice, description, index }: Chair & { index: number }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     const img = imageRef.current;

//     if (!card || !img) return;

//     // Initial animation with random delay
//     gsap.fromTo(img,
//       { opacity: 0, scale: 0.5 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         delay: index * 0.1 + Math.random() * 0.3,
//         ease: "back.out(1.7)",
//         onComplete: () => {
//           // Flash effect
//           gsap.to(img, {
//             opacity: 0.6,
//             duration: 0.2,
//             repeat: 1,
//             yoyo: true
//           });
//         }
//       }
//     );

//     // Hover timeline
//     const hoverTL = gsap.timeline({ paused: true });
//     hoverTL
//       .to(card, {
//         y: -8,
//         scale: 1.02,
//         duration: 0.3,
//         ease: "power2.out"
//       })
//       .to(img, {
//         scale: 1.1,
//         duration: 0.3,
//         ease: "power2.out"
//       }, 0);

//     card.addEventListener('mouseenter', () => hoverTL.play());
//     card.addEventListener('mouseleave', () => hoverTL.reverse());

//     return () => {
//       hoverTL.kill();
//       card.removeEventListener('mouseenter', () => {});
//       card.removeEventListener('mouseleave', () => {});
//     };
//   }, [index]);

//   return (
//     <div
//       ref={cardRef}
//       className="bg-white rounded-2xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl relative overflow-hidden group h-full flex flex-col"
//     >
//       <div ref={imageRef} className="relative h-48 mb-4 overflow-hidden rounded-xl flex-1">
//         <Image
//           src={imageUrl}
//           alt={name}
//           width={400}
//           height={400}
//           className="w-full h-full object-cover transform transition-transform duration-300"
//           onError={(e) => {
//             (e.target as HTMLImageElement).src = '/fallback-image.jpg';
//           }}
//         />
//       </div>
      
//       <h3 className="text-lg font-bold text-[#1A0B5B] mb-2">{name}</h3>
//       <p className="text-gray-600 text-xs mb-4 min-h-[40px]">{description}</p>
      
//       <div className="flex justify-between items-center mt-auto">
//         <div className="flex flex-col">
//           {discountedPrice && (
//             <span className="text-xs line-through text-gray-400">${price}</span>
//           )}
//           <span className={`text-lg font-bold ${discountedPrice ? 'text-[#FB2E86]' : 'text-green-500'}`}>
//             ${discountedPrice || price}
//           </span>
//         </div>
//         <button className="bg-[#FB2E86] text-white px-3 py-1.5 rounded-full hover:bg-[#e02675] transition-colors duration-300 text-xs">
//           Add to Cart
//         </button>
//       </div>

//       {discountedPrice && (
//         <div className="absolute top-2 right-2 bg-[#FB2E86] text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-md">
//           Sale!
//         </div>
//       )}
//     </div>
//   );
// };