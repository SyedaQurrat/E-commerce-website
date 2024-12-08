
// import Image from 'next/image';

// const UniqueSection = () => {
//   return (
//     <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-20">
//         {/* 1st Div - Hero Image and Discount */}
//       <div className="relative w-[706px]  mt-86 lg:mt-0  bg-[#ECD2FA59] rounded-full">
//         {/* Hero Image */}
//         <Image
//           src="/images/Unique-Sofa.png"
//           alt="Hero Image"
//           width={706}
//           height={400}
//           className="object-contain rounded-lg"
//         />
//       </div>
      

//       {/* Second Div - Content */}
//       <div className="w-full lg:w-[644px] h-auto text-left mt-8 lg:mt-0">
//         <h1 className="font-josefin text-[53px] leading-[81.98px] text-[#000000] mt-4">
//         Unique Features Of leatest & <br />
//         Trending Poducts
//         </h1>
//         <p className="font-lato text-[16px] leading-[28px] text-[#8A8FB9] mt-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper eros nec purus feugiat, eget laoreet justo tempus.
//         </p>
//         <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold text-[16px] rounded-[2px] mt-8">
//           Add to Cart
//         </button>
//         <div>
            
//         </div>
        
//       </div>

      
//     </div>
//   );
// };

// export default UniqueSection;




'use client';
import Image from "next/image";

const UniqueSection = () => {
  return (
    <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-20">
      {/* 1st Div - Hero Image and Discount */}
      <div className="relative w-[706px] mt-86 lg:mt-0 bg-[#ECD2FA59] rounded-full">
        {/* Hero Image */}
        <Image
          src="/images/Unique-Sofa.png"
          alt="Hero Image"
          width={706}
          height={400}
          className="object-contain rounded-lg"
        />
      </div>

      {/* Second Div - Content */}
      <div className="w-full lg:w-[644px] h-auto text-left mt-8 lg:mt-0">
        <h1 className="font-josefin text-[53px] leading-[81.98px] text-[#000000] mt-4">
          Unique Features Of Latest & 
          Trending Products
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
