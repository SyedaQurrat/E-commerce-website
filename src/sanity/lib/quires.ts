

  export const queries = {
      // Get all products
      getAllProducts: `
        *[_type == "product"]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          isFeaturedProduct,
          stockLevel,
          category
        }
      `,
    
      // Get featured products only
      getFeaturedProducts: `
        *[_type == "product" && isFeaturedProduct == true]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          stockLevel,
          category
        }
      `,
    
      // Get products by category
      getProductsByCategory: (category: string) => `
        *[_type == "product" && category == "${category}"]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          isFeaturedProduct,
          stockLevel
        }
      `,
    



// In your sanity/lib/quires.ts
getProductById: (id: string) => `
  *[_type == "product" && _id == "${id}"][0]{
    _id,
    name,
    "image": image.asset->url, // Resolve image URL directly
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }
`,
}




    //   // Get a single product by ID
    //   getProductById: (id: string) => `
    //     *[_type == "product" && _id == "${id}"][0]{
    //       _id,
    //       name,
    //       image,
    //       price,
    //       description,
    //       discountPercentage,
    //       isFeaturedProduct,
    //       stockLevel,
    //       category
    //     }
    //   `,
    // };
    