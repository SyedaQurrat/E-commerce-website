// import { GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
// import React from 'react';
// import Image from 'next/image';

// const ProductCategoryPage = ({ products }: { products: any[] }) => {
//   const router = useRouter();
//   const { category } = router.query;

//   if (!products) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold capitalize mb-4">{category} Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-md shadow-md p-4 hover:shadow-lg transition"
//           >
//             <Image src={product.imagePath} alt={product.name} className="w-full h-40 object-cover mb-2" />
//             <h2 className="font-semibold">{product.name}</h2>
//             <p className="text-gray-500">{product.description}</p>
//             <p className="font-bold text-lg">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Static paths for categories
//   const categories = ['featured', 'latest', 'trending', 'discount'];
//   const paths = categories.map((category) => ({
//     params: { category },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { category } = context.params || {};
//   const res = await fetch('https://next-ecommerce-template-4.vercel.app/api/product');
//   const data = await res.json();

//   let products = data.products;

//   // Filter products based on the category
//   if (category === 'featured') {
//     products = products.filter((product : any) => product.isFeaturedProduct);
//   } else if (category === 'latest') {
//     products = products.slice(-5); // Last 5 products as "latest"
//   } else if (category === 'trending') {
//     products = products.filter((product : any) => product.stockLevel > 15); // Example logic
//   } else if (category === 'discount') {
//     products = products.filter((product :any) => product.discountPercentage > 0);
//   }

//   return {
//     props: {
//       products,
//     },
//     revalidate: 60, // Regenerate every 60 seconds
//   };
// };

// export default ProductCategoryPage;






import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductCategoryPage = ({ products }: { products: any[] }) => {
  const router = useRouter();
  const { category } = router.query;

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{category} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md shadow-md p-4 hover:shadow-lg transition"
          >
            <Image
              src={product.imagePath}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
              width={150}
              height={150}
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["featured", "latest", "trending", "discount"];
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params || {};
  const res = await fetch("https://next-ecommerce-template-4.vercel.app/api/product");
  const data = await res.json();

  let products = data.products;

  if (category === "featured") {
    products = products.filter((product: any) => product.isFeaturedProduct);
  } else if (category === "latest") {
    products = products.slice(-5);
  } else if (category === "trending") {
    products = products.filter((product: any) => product.stockLevel > 15);
  } else if (category === "discount") {
    products = products.filter((product: any) => product.discountPercentage > 0);
  }

  return {
    props: { products },
    revalidate: 60,
  };
};

export default ProductCategoryPage;
