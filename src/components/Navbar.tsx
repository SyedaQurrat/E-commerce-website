"use client";
import { useState } from "react";
import Link from "next/link";
import {
  RiArrowDropDownLine,
  RiSearchLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

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
          isMenuOpen ? "block" : "hidden"
        } absolute md:static bg-white w-full md:w-auto md:flex flex-col md:flex-row items-center md:gap-6 top-12 left-0 md:top-auto md:left-auto z-10`}
      >
        <div className="flex flex-col md:flex-row items-center md:gap-6 text-[#0D0E43] font-lato font-normal text-[14px] sm:text-[16px] leading-[20px]">
          {/* Home Redirect */}
          <Link href="/" className="cursor-pointer">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            Pages
            <RiArrowDropDownLine className="w-4 h-4" />
            {isAboutDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border border-[#E7E6EF] shadow-lg p-2 rounded-md w-[200px]">
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/404-notFound">404</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            Products
            <RiArrowDropDownLine className="w-4 h-4" />
            {isProductDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border border-[#E7E6EF] shadow-lg p-2 rounded-md w-[200px]">
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/item/featured">Featured Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/item/latest">Leatest Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/item/trending">Trending Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/item/discount">Discount Item</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#F2F0FF] cursor-pointer">
                  <Link href="/item/categorie">Top Categories</Link>
                </li>
                
              </ul>
            )}
          </div>

          {/* Blog Redirect */}
          <Link href="#" className="cursor-pointer">
            Blog
          </Link>

          {/* Shop Redirect */}
          <Link href="/shop" className="cursor-pointer">
            Shop
          </Link>

          {/* Contact Redirect */}
          <Link href="/contact-us" className="cursor-pointer">
            Contact
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[150px] sm:w-[250px] md:w-[317px] h-[40px] px-4 border-2 border-[#E7E6EF] text-sm outline-none"
        />
        <div className="w-[51px] h-[40px] bg-[#FB2E86] flex items-center justify-center">
          <RiSearchLine className="text-white w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

