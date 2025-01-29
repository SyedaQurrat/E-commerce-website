'use client';
import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import LogoImg from '@/components/LogoImg';
import Image from 'next/image';
import { useWishlist } from '@/components/Context/wishlistContext';
import { AiOutlineClose } from 'react-icons/ai';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="flex flex-col min-h-screen bg-[#EEEFFB]">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Heading */}
      <Heading />

      {/* Wishlist Content */}
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-lato font-bold text-[#7E33E0] text-center mb-6">
          My Wishlist
        </h1>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-md bg-white p-4 flex flex-col items-center text-center"
              >
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mb-4 rounded-md"
                />
                {/* Product Name */}
                <h2 className="font-josefin-sans text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                {/* Product Price */}
                <p className="font-josefin-sans text-md text-[#FB2E86] font-bold">
                  ${item.price}
                </p>
                {/* Remove Button */}
                <button
                  className="flex items-center mt-4 px-4 py-2 bg-[#FB2E86] text-white font-josefin-sans text-sm rounded-lg hover:bg-[#7E33E0] transition"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <AiOutlineClose className="mr-2" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600 mt-8 font-josefin-sans">
            Your wishlist is empty.
          </p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white py-6">
        <LogoImg />
        <Footer />
      </footer>
    </div>
  );
};

export default WishlistPage;
