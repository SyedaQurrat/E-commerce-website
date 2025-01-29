
// import Header from '@/app/Header/page';
// import Navbar from '@/components/Navbar';
// import Heading from '@/components/Heading';
// import Footer from '@/components/Footer';
// import LogoImg from '@/components/LogoImg';
// import { sanityClient } from '@/sanity/lib/sanityClient';
// import { queries } from '@/sanity/lib/quires';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/imageUrl'; // Import helper function
// import Link from 'next/link'; 
// type Product = {
//   _id: string;
//   name: string;
//   image: any;
//   price: number;
//   description: string;
// };

// const Shop = async () => {
//   // Fetch all products from Sanity
//   const products: Product[] = await sanityClient.fetch(queries.getAllProducts);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
//       {/* Header */}
//       <Header />
//       {/* Navbar */}
//       <Navbar />
//       {/* Heading */}
//       <Heading />

//       {/* Main Content */}
//       <main className="flex-grow p-4">
//         <h1 className="text-2xl font-bold mb-4 text-center">All Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//              <Link key={product._id} href={`/shop/${product._id}`}>
//             <div
//               key={product._id}
//               className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white"
//             >
//               {/* Use urlFor helper for image URLs */}
//               <div className="w-full h-64 relative mb-4">
//                 <Image
//                   src={urlFor(product.image).url() || '/placeholder.png'}
//                   alt={product.name}
//                   layout="fill" // Fill the parent div
//                   objectFit="contain" // Maintain image aspect ratio
//                   className="rounded-md"
//                 />
//               </div>
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-gray-600 truncate">{product.description}</p>
//               <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>
//             </div>
//           </Link>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white py-6">
//         <LogoImg />
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Shop;


import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import LogoImg from '@/components/LogoImg';
import { sanityClient } from '@/sanity/lib/sanityClient';
import { queries } from '@/sanity/lib/quires';
import ProductCard from '@/components/Cards/ProductCard'; // Import the client component

type Product = {
  _id: string;
  name: string;
  image: any;
  price: number;
  description: string;
};

const Shop = async () => {
  const products: Product[] = await sanityClient.fetch(queries.getAllProducts);

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Heading */}
      <Heading />

      {/* Main Content */}
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6">
        <LogoImg />
        <Footer />
      </footer>
    </div>
  );
};

export default Shop;
