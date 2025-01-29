// import { sanityClient } from '@/sanity/lib/sanityClient';
// import { queries } from '@/sanity/lib/quires';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/imageUrl';
// import Header from '@/app/Header/page';
// import Navbar from '@/components/Navbar';
// import Heading from '@/components/Heading';
// import Footer from '@/components/Footer';
// import LogoImg from '@/components/LogoImg';

// type Product = {
//   _id: string;
//   name: string;
//   image: any;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
// };

// interface Props {
//   params: {
//     id: string; // Dynamic ID from URL
//   };
// } 

// const ProductDetails = async ({ params }: Props) => {
//   // Fetch single product details using ID
//   const product: Product = await sanityClient.fetch(queries.getProductById(params.id));

//   if (!product) {
//     return (
//       <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
//         <Header />
//         <Navbar />
//         <div className="flex-grow flex items-center justify-center">
//           <p className="text-xl text-red-500">Product not found.</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
//       {/* Header */}
//       <Header />
//       {/* Navbar */}
//       <Navbar />
//       {/* Content Section */}
//       <div className="flex-grow p-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Product Image */}
//             <div className="w-full md:w-1/2">
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//             {/* Product Details */}
//             <div className="w-full md:w-1/2">
//               <p className="text-lg text-gray-600 mb-2">{product.description}</p>
//               <p className="text-green-500 font-bold text-xl mb-4">
//                 Price: ${product.price}
//               </p>
//               <p className="text-gray-600">Category: {product.category}</p>
//               <p className="text-gray-600">Stock Level: {product.stockLevel}</p>
//               {product.discountPercentage > 0 && (
//                 <p className="text-red-500 font-semibold">
//                   Discount: {product.discountPercentage}%
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer className="bg-white py-6">
//         <LogoImg />
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default ProductDetails;


import { sanityClient } from '@/sanity/lib/sanityClient';
import { queries } from '@/sanity/lib/quires';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/imageUrl';
import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoImg from '@/components/LogoImg';
import IconButtons from '@/components/ui/IconButtons';
import { motion } from 'framer-motion';

type Product = {
  _id: string;
  name: string;
  image: any;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
};

interface Props {
  params: {
    id: string; // Dynamic ID from URL
  };
}

const ProductDetails = async ({ params }: Props) => {
  const product: Product = await sanityClient.fetch(queries.getProductById(params.id));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
        <Header />
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      <Header />
      <Navbar />
      <div className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.name}
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600">{product.description}</p>
              <p className="text-green-500 font-bold text-xl">
                Price: ${product.price}
              </p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Stock Level: {product.stockLevel}</p>
              {product.discountPercentage > 0 && (
                <p className="text-red-500 font-semibold">
                  Discount: {product.discountPercentage}%
                </p>
              )}
              {/* Icons */}
              <IconButtons />
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="bg-white py-6">
        <LogoImg />
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
