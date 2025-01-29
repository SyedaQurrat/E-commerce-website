"use client";

import { ShoppingCart, Heart, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const IconButtons = () => {
  return (
    <div className="flex items-center space-x-4 mt-6">
      {/* Cart Icon */}
      <Link href="/cart">
        <motion.div
          className="p-2 bg-green-500 rounded-full text-white cursor-pointer hover:bg-green-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          <ShoppingCart size={24} />
        </motion.div>
      </Link>
      {/* Wishlist Icon */}
      <Link href="/wishlist">
        <motion.div
          className="p-2 bg-pink-500 rounded-full text-white cursor-pointer hover:bg-pink-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          <Heart size={24} />
        </motion.div>
      </Link>
      {/* Reviews Icon */}
      <Link href="/reviews">
        <motion.div
          className="p-2 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          <Star size={24} />
        </motion.div>
      </Link>
    </div>
  );
};

export default IconButtons;
