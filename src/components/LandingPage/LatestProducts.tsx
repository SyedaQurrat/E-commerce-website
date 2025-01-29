// 'use client';
// import Card2 from "@/components/Cards/Card-2";

// const LatestProducts = () => {
//     // List of image sources
//     const images = [
//       "/media-files/CantileverChair-1.png",
//       "/media-files/CantileverChair-2.png",
//       "/media-files/CantileverChair-3.png",
//       "/media-files/CantileverChair-4.png",
//       "/media-files/CantileverChair-5.png",
//       "/media-files/CantileverChair-6.png",
//     ];
  
//     return (
//       <section className="my-16">
//         {/* Title */}
//         <h2 className="text-[#151875] font-josefin text-[42px] leading-[49.22px] text-center mb-8">
//           Leatest Products
//         </h2>
  
//         {/* Categories */}
//         <div className="flex justify-center items-center gap-6 mb-12">
//           <div className="flex flex-col items-center">
//             <span className="text-[#FB2E86] font-lato text-[18px]">New Arrival</span>
//             <div className="w-[93px] h-[2px] bg-[#FB2E86] mt-2"></div>
//           </div>
//           <span className="text-[#151875] font-lato text-[18px]">Best Seller</span>
//           <span className="text-[#151875] font-lato text-[18px]">Featured</span>
//           <span className="text-[#151875] font-lato text-[18px]">Special Offer</span>
//         </div>
  
//        {/* Cards */}
//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
//           {images.map((imagesrc, index) => (
//             <Card2 key={index} imageSrc={imagesrc} />
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default LatestProducts;




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
