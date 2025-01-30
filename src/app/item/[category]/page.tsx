



// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// const ProductCategoryPage = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("https://next-ecommerce-template-4.vercel.app/api/product");
//         const data = await res.json();
//         let filteredProducts = Array.isArray(data.products) ? data.products : [];

//         if (category === "featured") {
//           filteredProducts = filteredProducts.filter((product : any) => product.isFeaturedProduct);
//         } else if (category === "latest") {
//           filteredProducts = filteredProducts.slice(-5);
//         } else if (category === "trending") {
//           filteredProducts = filteredProducts.filter((product : any) => product.stockLevel > 15);
//         } else if (category === "discount") {
//           filteredProducts = filteredProducts.filter((product : any) => product.discountPercentage > 0);
//         }

//         setProducts(filteredProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   if (loading) {
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
//             <Image
//               src={product.imagePath}
//               alt={product.name}
//               className="w-full h-40 object-cover mb-2"
//               width={150}
//               height={150}
//             />
//             <h2 className="font-semibold">{product.name}</h2>
//             <p className="text-gray-500">{product.description}</p>
//             <p className="font-bold text-lg">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCategoryPage;






import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductCategoryPage = () => {
  const params = useParams();
  const category = params?.category as string; // Type assertion
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://next-ecommerce-template-4.vercel.app/api/product");
        const data = await res.json();
        let filteredProducts = Array.isArray(data.products) ? data.products : [];

        if (category === "featured") {
          filteredProducts = filteredProducts.filter((product : any ) => product.isFeaturedProduct);
        } else if (category === "latest") {
          filteredProducts = filteredProducts.slice(-5);
        } else if (category === "trending") {
          filteredProducts = filteredProducts.filter((product : any) => product.stockLevel > 15);
        } else if (category === "discount") {
          filteredProducts = filteredProducts.filter((product : any) => product.discountPercentage > 0);
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
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

export default ProductCategoryPage;
