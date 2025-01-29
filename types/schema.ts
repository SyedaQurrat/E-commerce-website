
export interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel?: number;
    category: string;
  //   image?: {
  //               asset: {
  //                   _ref: string;
  //                   _type: "image";
  //               };
  //           };
   }
