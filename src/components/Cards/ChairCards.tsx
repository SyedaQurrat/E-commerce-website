
// import { useRouter } from "next/navigation"; 
// import Image from 'next/image'

// interface ChairCardProps {
//   name: string;
//   imageUrl: string;
//   price: number;
//   description: string;
// }

// export default function ChairCard({ name, imageUrl, price, description }: ChairCardProps) {
//   const router = useRouter();

//   const handleViewDetail = () => {
//     router.push(`/details/${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4">
//       <Image
//         src={imageUrl || "/fallback-image.jpg"} // ✅ chair ki jagah imageUrl use kiya
//         alt={name || "Chair Image"} // ✅ chair.name ki jagah sirf name use kiya
//         width={300} // Required for Next.js Image
//         height={200} // Required for Next.js Image
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <h3 className="text-lg font-semibold mt-2">{name}</h3>
//       <p className="text-gray-600">${price}</p>
//       <button
//         onClick={handleViewDetail}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         View Detail
//       </button>
//     </div>
//   );
// }







import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ChairCardProps {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export default function ChairCard({ name, imageUrl, price, description }: ChairCardProps) {
  const router = useRouter();
  

  const handleViewDetail = () => {
    router.push(`/details/${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <Image
        src={imageUrl || '/fallback-image.jpg'} 
        alt={name || 'Chair Image'}
        width={500}
        height={500}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <button
        onClick={handleViewDetail}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Detail
      </button>
    </div>
  );
}
