'use client'; 
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/imageUrl';
import { useRouter } from 'next/navigation';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { useWishlist } from '@/components/Context/wishlistContext'; // Wishlist context for managing wishlist items
import { useCart } from '@/components/Context/CartContext'; // Cart context for managing cart items

type Product = {
  _id: string;
  name: string;
  image: any;
  price: number;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { addToWishlist } = useWishlist(); 
  const { addToCart, state } = useCart(); 

  // Add product to cart
  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      image: urlFor(product.image).url() || '/placeholder.png',
      price: product.price,
      quantity: 1, // Ensure quantity is set to 1 when adding to cart
    });
  };

  // Add product to wishlist
  const handleAddToWishlist = () => {
    addToWishlist({
      id: product._id,
      name: product.name,
      image: urlFor(product.image).url() || '/placeholder.png',
      price: product.price,
    });
  };

  // Navigate to reviews page
  const handleViewReviews = () => {
    router.push(`/shop/${product._id}/reviews`); // Navigate to the product's reviews page
  };

  // Calculate total price of all items in the cart
  const getTotalPrice = () => {
    return state.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="group border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition-all hover:bg-[#F6F5FF] hover:translate-y-[-5px] relative">
      <div className="flex justify-between">
        {/* Left side: Product Info */}
        <div className="w-full">
          {/* Product Image */}
          <div className="w-full h-64 relative mb-4">
            <Image
              src={urlFor(product.image).url() || '/placeholder.png'}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Product Info */}
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 truncate">{product.description}</p>
          <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>

          {/* Action Icons */}
          <div className="absolute top-4 right-4 flex flex-col items-center space-y-4">
            {/* Cart Icon */}
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-green-200 transition"
              onClick={handleAddToCart}
              title="Add to Cart"
            >
              <AiOutlineShoppingCart className="text-xl text-gray-700" />
            </button>
            {/* Wishlist Icon */}
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-red-200 transition"
              onClick={handleAddToWishlist}
              title="Add to Wishlist"
            >
              <AiOutlineHeart className="text-xl text-gray-700" />
            </button>
            {/* Reviews Icon */}
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-200 transition"
              onClick={handleViewReviews}
              title="View Reviews"
            >
              <AiOutlineComment className="text-xl text-gray-700" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
