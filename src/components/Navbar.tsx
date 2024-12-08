
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  RiArrowDropDownLine,
  RiSearchLine,
  RiMenu3Line,
  RiCloseLine,
} from 'react-icons/ri';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown menu items with links
  const dropdownItems = [
    { name: 'Gird Default', href: '/gird-default' },
    { name: 'Shop List', href: '/shop-list' },
    { name: 'Shop Left Sidebar', href: '/shop-left-sidebar' },
    { name: 'Products Detail', href: '/products-detail' },
    { name: 'Shopping Cart', href: '/shopping-cart' },
    { name: 'Order Completed', href: '/order-completed' },
    { name: 'Hekto Demo', href: '/hekto-demo' },
    { name: 'My Account', href: '/my-account' },
    { name: 'Blog Page', href: '/blog-page' },
    { name: 'Single Blog', href: '/single-blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Hekto 404 Not Found', href: '/404' },
  ];

  return (
    <nav className="bg-white flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-2 shadow-sm relative">
      {/* Hamburger Menu (Small Screens) */}
      <div className="flex items-center md:hidden">
        <button
          className="text-[#0D0E43] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-[#0D0E43] font-josefin font-bold text-[24px] sm:text-[34px] leading-[34px]">
          Hekto
        </h1>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute md:static bg-white w-full md:w-auto md:flex flex-col md:flex-row items-center md:gap-6 top-12 left-0 md:top-auto md:left-auto z-10`}
      >
        <div className="flex flex-col md:flex-row items-center md:gap-6 text-[#0D0E43] font-lato font-normal text-[14px] sm:text-[16px] leading-[20px]">
          {/* Home Dropdown */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Home
            <RiArrowDropDownLine className="w-4 h-4" />
            {isDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border border-[#E7E6EF] shadow-lg p-2 rounded-md w-[200px]">
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer"
                  >
                    <Link href={item.href} className="block w-full">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="cursor-pointer">Pages</span>
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">Contact</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="w-[150px] sm:w-[250px] md:w-[317px] h-[40px] px-4 border-2 border-[#E7E6EF] text-sm outline-none"
        />
        {/* Search Button */}
        <div className="w-[51px] h-[40px] bg-[#FB2E86] flex items-center justify-center">
          <RiSearchLine className="text-white w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

