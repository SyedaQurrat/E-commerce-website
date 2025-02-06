'use client'
// // components/FeatureSection.tsx
// import { useEffect, useState } from 'react';
// import ChairCard from '../Cards/ChairCards';

// interface ChairProps {
//   name: string;
//   imageUrl: string;
//   price: number;
//   description: string;
// }

// export default function FeatureSection() {
//   const [chairs, setChairs] = useState<ChairProps[] | null>(null);

//   useEffect(() => {
//     const fetchChairs = async () => {
//       try {
//         const query = encodeURIComponent(
//           `*[_type == "product" && (name == "Varmora Plastic Chair Solid" || name == "Tribù Elio Chair" || name == "Sobuy Blue Folding Chair Wooden Padded" || name == "Hans Wegner Style Three-Legged Shell Chair")] {
//             name,
//             "imageUrl": image.asset->url,
//             price,
//             description
//           }`
//         );
//         const projectId = '9074oi3u';
//         const dataset = 'production';
//         const apiVersion = '2023-01-01';
//         const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.result && data.result.length > 0) {
//           const uniqueChairs = data.result.filter((chair: ChairProps, index: number, self: ChairProps[]) => 
//             index === self.findIndex((c) => c.name === chair.name)
//           );
//           setChairs(uniqueChairs);
//         } else {
//           console.error('No chairs found!');
//         }
//       } catch (error) {
//         console.error('Error fetching chairs:', error);
//       }
//     };

//     fetchChairs();
//   }, []);

//   return (
//     <section className="mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//       <div className="text-center">
//         <h2 className="font-josefin text-[#1A0B5B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//           Featured Products
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
//         {chairs ? (
//           chairs.map((chair: ChairProps, index: number) => (
//             <ChairCard
//               key={index}
//               name={chair.name}
//               imageUrl={chair.imageUrl}
//               price={chair.price}
//               description={chair.description}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500">Loading chairs...</p>
//         )}
//       </div>
//     </section>
//   );
// }







import { useEffect, useState } from 'react';
import ChairCard from '../Cards/ChairCards';
import { useRouter } from 'next/navigation';

interface ChairProps {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export default function FeatureSection() {
  const [chairs, setChairs] = useState<ChairProps[] | null>(null);
  const router = useRouter();

  useEffect(() => {
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
        const projectId = '9074oi3u';
        const dataset = 'production';
        const apiVersion = '2023-01-01';
        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.length > 0) {
          const uniqueChairs = data.result.filter((chair: ChairProps, index: number, self: ChairProps[]) => 
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
    <section className="mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {chairs ? (
          chairs.map((chair: ChairProps, index: number) => (
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
