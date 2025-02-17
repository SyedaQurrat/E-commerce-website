// 'use client';
// import Image from "next/image";
// const UniqueSection = () => {
//   return (
//     <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-20">
//       {/* 1st Div - Hero Image and Discount */}
//       <div className="relative w-[706px] mt-86 lg:mt-0 bg-[#ECD2FA59] rounded-full">
//         {/* Hero Image */}
//         <Image
//           src="/media-files/Unique-Sofa.png"
//           alt="Hero media-file"
//           width={706}
//           height={400}
//           className="object-contain rounded-lg"
//         />
//       </div>

//       {/* Second Div - Content */}
//       <div className="w-full lg:w-[644px] h-auto text-left mt-8 lg:mt-0">
//         <h1 className="font-josefin text-[53px] leading-[81.98px] text-[#000000] mt-4">
//           Unique Features Of Latest & 
//           Trending Products
//         </h1>

//         {/* Description Section */}
//         <ul className="mt-6 space-y-4">
//           <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
//             <span className="w-2 h-2 rounded-full bg-[#FB2E86] inline-block mr-4 mt-[7px]"></span>
//             All frames constructed with hardwood solids and laminates
//           </li>
//           <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
//             <span className="w-2 h-2 rounded-full bg-[#2B59FF] inline-block mr-4 mt-[7px]"></span>
//             Reinforced with double wood dowels, glue, screw - nails corner
//           </li>
//           <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
//             <span className="w-2 h-2 rounded-full bg-[#00A85A] inline-block mr-4 mt-[7px]"></span>
//             Arms, backs and seats are structurally reinforced blocks and machine nails
//           </li>
//         </ul>

//        <div className="flex">
//          {/* Button Section */}
//          <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold text-[16px] rounded-[2px] mt-8">
//           Add to Cart
//         </button>

//         {/* Additional Content */}
//         <div className="mt-9 ml-2">
//           <h3 className="font-josefin text-[14px] leading-[16.14px] text-[#151875]">
//             B&B Italian Sofa
//           </h3>
//           <p className="font-lato text-[14px] leading-[16.8px] text-[#000000] mt-2">
//             $32.00
//           </p>
//         </div>
//        </div>
//       </div>
//     </div>
//   );
// };

// export default UniqueSection;


'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
const UniqueSection = () => {
  const [sofaImage, setSofaImage] = useState<string>("");

  useEffect(() => {
    const fetchSofaData = async () => {
      try {
        const query = encodeURIComponent(
          `*[_type == "product" && name == "Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair"] {
            "imageUrl": image.asset->url
          }`
        );
        const projectId = "9074oi3u"; // Replace with your Sanity project ID
        const dataset = "production"; // Replace with your dataset name
        const apiVersion = "2023-01-01"; // Adjust based on your Sanity API version
        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.length > 0) {
          setSofaImage(data.result[0].imageUrl);
        } else {
          console.error("Sofa image not found!");
        }
      } catch (error) {
        console.error("Error fetching sofa image:", error);
      }
    };

    fetchSofaData();
  }, []);

  return (
    <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-20">
      {/* 1st Div - Hero Image and Discount */}
      <div className="relative w-[706px] mt-86 lg:mt-0 bg-[#ECD2FA59] rounded-full">
        {/* Hero Image */}
        {sofaImage ? (
          <Image
            src={sofaImage}
            alt="Stylish Sofa"
            width={706}
            height={400}
            className="object-contain rounded-lg"
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

      {/* Second Div - Content */}
      <div className="w-full lg:w-[644px] h-auto text-left mt-8 lg:mt-0">
        <h1 className="font-josefin text-[53px] leading-[81.98px] text-[#000000] mt-4">
          Unique Features Of Latest & Trending Products
        </h1>

        {/* Description Section */}
        <ul className="mt-6 space-y-4">
          <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
            <span className="w-2 h-2 rounded-full bg-[#FB2E86] inline-block mr-4 mt-[7px]"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
            <span className="w-2 h-2 rounded-full bg-[#2B59FF] inline-block mr-4 mt-[7px]"></span>
            Reinforced with double wood dowels, glue, screw - nails corner
          </li>
          <li className="font-lato text-[16px] leading-[21.12px] text-[#ACABC3] flex items-start">
            <span className="w-2 h-2 rounded-full bg-[#00A85A] inline-block mr-4 mt-[7px]"></span>
            Arms, backs and seats are structurally reinforced blocks and machine nails
          </li>
        </ul>

        <div className="flex">
          {/* Button Section */}
          <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold text-[16px] rounded-[2px] mt-8">
            Add to Cart
          </button>

          {/* Additional Content */}
          <div className="mt-9 ml-2">
            <h3 className="font-josefin text-[14px] leading-[16.14px] text-[#151875]">
              B&B Italian Sofa
            </h3>
            <p className="font-lato text-[14px] leading-[16.8px] text-[#000000] mt-2">
              $32.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;

