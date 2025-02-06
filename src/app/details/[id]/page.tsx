

// import { sanityClient } from '@/sanity/lib/sanityClient';
// import { queries } from '@/sanity/lib/quires';
// import Image from 'next/image';
// import Header from '@/app/Header/page';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import LogoImg from '@/components/LogoImg';
// import { motion } from 'framer-motion';

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
//       <Header />
//       <Navbar />
//       <div className="flex-grow p-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.h1
//             className="text-3xl font-bold mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {product.name}
//           </motion.h1>

//           {/* Product Detail Section */}
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Product Image */}
//             <motion.div
//               className="w-full md:w-1/2"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Image
//                 src={product.image.asset.url}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </motion.div>

//             {/* Product Info */}
//             <motion.div
//               className="w-full md:w-1/2 space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {/* Description */}
//               <p className="text-lg text-gray-600">{product.description}</p>

//               {/* Price */}
//               <p className="text-green-500 font-bold text-xl">
//                 Price: ${product.price}
//               </p>

//               {/* Category */}
//               <p className="text-gray-600">Category: {product.category}</p>

//               {/* Stock Level (Quantity) */}
//               <p className="text-gray-600">Stock Level: {product.stockLevel}</p>

//               {/* Discount */}
//               {product.discountPercentage > 0 && (
//                 <p className="text-red-500 font-semibold">
//                   Discount: {product.discountPercentage}%
//                 </p>
//               )}
//             </motion.div>
//           </div>

//           {/* Add to Cart or Any Other Button */}
//           <div className="mt-6">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-white py-6">
//         <LogoImg />
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default ProductDetails;








// import { notFound } from 'next/navigation';

// interface ProductDetailProps {
//   params: { id: string | string[] };
// }

// export default async function ProductDetail({ params }: ProductDetailProps) {
//   const productId = Array.isArray(params.id) ? params.id[0] : params.id; // Option 1

//   if (!productId) return notFound();

//   const query = encodeURIComponent(`*[_type == "product" && _id == "${productId}"][0]`);
//   const projectId = '9074oi3u';
//   const dataset = 'production';
//   const apiVersion = '2023-01-01';
//   const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

//   const response = await fetch(url, { cache: 'no-store' });
//   const data = await response.json();
//   const product = data.result;

//   if (!product) return notFound();

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// }









// import { sanityClient } from '@/sanity/lib/sanityClient';
// import { queries } from '@/sanity/lib/quires';
// import Image from 'next/image';
// import Header from '@/app/Header/page';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import LogoImg from '@/components/LogoImg';
// import { motion } from 'framer-motion';
// import { notFound } from 'next/navigation';

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
//     id: string;
//   };
// }

// export async function generateStaticParams() {
//   const products = await sanityClient.fetch(`*[_type == "product"]{ _id }`);

//   return products.map((product: Product) => ({
//     id: product._id, // Ensure this is a string
//   }));
// }

// const ProductDetails = async ({ params }: Props) => {
//   console.log("Product ID:", params.id); // Debugging

//   if (!params.id) {
//     console.log("Error: No product ID found in params!");
//     return notFound();
//   }

//   const product: Product | null = await sanityClient.fetch(queries.getProductById(params.id));

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
//       <Header />
//       <Navbar />
//       <div className="flex-grow p-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.h1
//             className="text-3xl font-bold mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {product.name}
//           </motion.h1>

//           {/* Product Detail Section */}
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Product Image */}
//             <motion.div
//               className="w-full md:w-1/2"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Image
//                 src={product.image.asset.url}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </motion.div>

//             {/* Product Info */}
//             <motion.div
//               className="w-full md:w-1/2 space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {/* Description */}
//               <p className="text-lg text-gray-600">{product.description}</p>

//               {/* Price */}
//               <p className="text-green-500 font-bold text-xl">
//                 Price: ${product.price}
//               </p>

//               {/* Category */}
//               <p className="text-gray-600">Category: {product.category}</p>

//               {/* Stock Level (Quantity) */}
//               <p className="text-gray-600">Stock Level: {product.stockLevel}</p>

//               {/* Discount */}
//               {product.discountPercentage > 0 && (
//                 <p className="text-red-500 font-semibold">
//                   Discount: {product.discountPercentage}%
//                 </p>
//               )}
//             </motion.div>
//           </div>

//           {/* Add to Cart or Any Other Button */}
//           <div className="mt-6">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
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
import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoImg from '@/components/LogoImg';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

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
    id: string;
  };
}

export async function generateStaticParams() {
  const products = await sanityClient.fetch(`*[_type == "product"]{ _id }`);

  return products.map((product: Product) => ({
    id: product._id, // Ensure this is a string
  }));
}

const ProductDetails = async ({ params }: Props) => {
  console.log("Product ID:", params.id); // Debugging

  if (!params.id) {
    console.log("Error: No product ID found in params!");
    return notFound();
  }

  let product: Product | null = null;

  try {
    product = await sanityClient.fetch(queries.getProductById(params.id));
    console.log("Fetched product:", product);
  } catch (error) {
    console.log("Error fetching product:", error);
    return notFound();
  }

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

          {/* Product Detail Section */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Description */}
              <p className="text-lg text-gray-600">{product.description}</p>

              {/* Price */}
              <p className="text-green-500 font-bold text-xl">
                Price: ${product.price}
              </p>

              {/* Category */}
              <p className="text-gray-600">Category: {product.category}</p>

              {/* Stock Level (Quantity) */}
              <p className="text-gray-600">Stock Level: {product.stockLevel}</p>

              {/* Discount */}
              {product.discountPercentage > 0 && (
                <p className="text-red-500 font-semibold">
                  Discount: {product.discountPercentage}%
                </p>
              )}
            </motion.div>
          </div>

          {/* Add to Cart or Any Other Button */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-6">
        <LogoImg />
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
