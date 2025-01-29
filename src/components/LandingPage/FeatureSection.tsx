// 'use client';
// import Card from '@/components/Cards/Card-1';

// export default function FeatureSection() {
//   const cards = [
//     {
//       imgSrc: '/media-files/Cantilever-chair-1.png',
//       title: 'Cantilever Chair',
//       code: 'Code - Y523201',
//       price: '$42.00',
//     },
//     {
//       imgSrc: '/media-files/Cantilever-chair-2.png',
//       title: 'Cantilever Chair',
//       code: 'Code - Y523201',
//       price: '$42.00',
//     },
//     {
//       imgSrc: '/media-files/Cantilever-chair-3.png',
//       title: 'Cantilever Chair',
//       code: 'Code - Y523201',
//       price: '$42.00',
//     },
//     {
//       imgSrc: '/media-files/Cantilever-chair-4.png',
//       title: 'Cantilever Chair',
//       code: 'Code - Y523201',
//       price: '$42.00',
//     },
//   ];

//   return (
//     <section className="mt-[50px]">
//       {/* Section Title */}
//       <div className="text-center">
//         <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
//           Featured Products
//         </h2>
//       </div>

//       {/* Cards Grid */}
//       <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// }




'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FeatureSection() {
  const [chairs, setChairs] = useState<
    { name: string; imageUrl: string; price: string; description: string }[] | null
  >(null);

  useEffect(() => {
    // Fetch unique chairs from Sanity
    const fetchChairs = async () => {
      try {
        const query = encodeURIComponent(
          `*[_type == "product" && (name == "Varmora Plastic Chair Solid" || name == "Tribù Elio Chair" || name == "Sobuy Blue Folding Chair Wooden Padded" || name == "Hans Wegner Style Three-Legged Shell Chair")] {
            name,
            "imageUrl": image.asset->url,
            price,
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
          // Filter for unique products by name
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
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
          Featured Products
        </h2>
      </div>

      {/* Display Chairs */}
      <div className="flex gap-6 justify-center mt-[40px] overflow-x-auto">
        {chairs ? (
          chairs.map((chair, index) => (
            <ChairCard
              key={index}
              name={chair.name}
              imageUrl={chair.imageUrl}
              price={chair.price}
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
  description,
}: {
  name: string;
  imageUrl: string;
  price: string;
  description: string;
}) => {
  return (
    <div className="bg-white w-[250px] h-auto shadow-lg rounded-lg p-4 flex-shrink-0 flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={250}
        height={250}
        className="w-full h-[200px] object-contain rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-4 text-center">{name}</h3>
      <p className="text-gray-600 text-sm mt-2 text-center">{description}</p>
      <p className="text-green-500 font-bold mt-2">Price: ${price}</p>
    </div>
  );
};
