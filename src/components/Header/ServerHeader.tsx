'use client';
// import { RiMailLine, RiPhoneLine, RiUserLine, RiUserAddLine, RiHeartLine, RiShoppingCartLine } from "react-icons/ri";
// import Link from "next/link";

// export default function ServerHeader() {
//   return (
//     <header className="bg-[#7E33E0] w-full max-w-[1920px] h-[44px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16">
//       {/* Left Section */}
//       <div className="flex items-center gap-4 sm:gap-6">
//         {/* Email */}
//         <div className="flex items-center gap-2">
//           <RiMailLine className="w-4 h-4 text-white" />
//           <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
//             mhhasanul@gmail.com
//           </span>
//         </div>

//         {/* Phone */}
//         <div className="flex items-center gap-2">
//           <RiPhoneLine className="w-4 h-4 text-white" />
//           <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
//             (12345) 67890
//           </span>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4 sm:gap-6">
//         {/* Login */}
//         <Link href="/login" passHref className="flex items-center gap-2 cursor-pointer">
//           <RiUserLine className="w-5 h-5 text-white" />
//           <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
//             Login
//           </span>
//         </Link>

//         {/* SignUp
//         <Link href="/signUp" passHref className="flex items-center gap-2 cursor-pointer">
//           <RiUserAddLine className="w-5 h-5 text-white" />
//           <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
//             SignUp
//           </span>
//         </Link> */}

//         {/* Wishlist */}
//         <Link href="/wishlist" passHref className="flex items-center gap-2 cursor-pointer">
//           <RiHeartLine className="w-5 h-5 text-white" />
//           <span className="hidden lg:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
//             Wishlist
//           </span>
//         </Link>

//         {/* Cart */}
//         <Link href="/cart" passHref className="flex items-center gap-2 cursor-pointer">
//           <RiShoppingCartLine className="w-5 h-5 text-white" />
//           <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
//             Cart
//           </span>
//         </Link>
//       </div>
//     </header>
//   );
// }








import { RiMailLine, RiPhoneLine, RiUserLine, RiUserFollowLine, RiHeartLine, RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ServerHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming logged-in status is managed here

  // Simulating checking login status (can be fetched from session or localStorage)
  useEffect(() => {
    const user = localStorage.getItem("user"); // Example of checking for user data
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="bg-[#7E33E0] w-full max-w-[1920px] h-[44px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Left Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Email */}
        <div className="flex items-center gap-2">
          <RiMailLine className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            https://www.hekto.pk
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <RiPhoneLine className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px] leading-[16px]">
            (12345) 67890
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Profile or Login */}
        {isLoggedIn ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <RiUserFollowLine className="w-5 h-5 text-white" />
            <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
              My Profile
            </span>
          </div>
        ) : (
          <Link href="/login" passHref className="flex items-center gap-2 cursor-pointer">
            <RiUserLine className="w-5 h-5 text-white" />
            <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
              Login
            </span>
          </Link>
        )}

        {/* Wishlist */}
        <Link href="/wishlist" passHref className="flex items-center gap-2 cursor-pointer">
          <RiHeartLine className="w-5 h-5 text-white" />
          <span className="hidden lg:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
            Wishlist
          </span>
        </Link>

        {/* Cart */}
        <Link href="/cart" passHref className="flex items-center gap-2 cursor-pointer">
          <RiShoppingCartLine className="w-5 h-5 text-white" />
          <span className="hidden md:inline text-white font-josefin font-semibold text-[14px] sm:text-[16px]">
            Cart
          </span>
        </Link>
      </div>
    </header>
  );
}
