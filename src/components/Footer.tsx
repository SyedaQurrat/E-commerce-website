'use client'; 

import { Span } from 'next/dist/trace';
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEEFFB] py-12 m-4">
      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto flex flex-wrap justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-16">
        
        {/* First Section: Hekto Logo & Email Signup */}
        <div className="flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
          {/* Logo */}
          <h1 className="font-josefin text-[#000000] text-[38px] leading-[44.53px]">
            Hekto
          </h1>
          
          {/* Email Signup */}
          <div className="mt-4 flex items-center ">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-[calc(100%-145px)] sm:w-[calc(100%-145px)] h-[44px] bg-white opacity-45 rounded-[3px] px-4 text-sm border-none"
              />
            <span className="w-[110px] h-[39px] bg-[#FB2E86] text-white font-roboto text-[16px] font-medium items-center">
              Sign Up
            </span>
           
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-[#8A8FB9] text-[16px] font-lato">
            <p>Contact Info</p>
            <p className="mt-2">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        {/* Second Section: Categories */}
        <div className="flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
          <p className="text-[#0D0E43] font-lato font-bold text-[18px] leading-[22px]">Categories</p>
          <ul className="mt-4 text-[#8A8FB9] text-[16px] font-lato">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Third Section: Customer Care */}
        <div className="flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
          <p className="text-[#0D0E43] font-lato font-bold text-[18px] leading-[22px]">Customer Care</p>
          <ul className="mt-4 text-[#8A8FB9] text-[16px] font-lato">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Fourth Section: Pages */}
        <div className="flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
          <p className="text-[#0D0E43] font-lato font-bold text-[18px] leading-[22px]">Pages</p>
          <ul className="mt-4 text-[#8A8FB9] text-[16px] font-lato">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-[#E7E4F8] py-4 mt-6 absolute">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="font-lato text-[#9DA0AE] text-[16px] font-semibold">©Syeda Qurrat - All Rights Reserved</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[#002F6C] text-white">
              <RiFacebookCircleFill className="w-[19px] h-[19px]" />
            </a>
            <a href="#" className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[#002F6C] text-white">
              <RiInstagramFill className="w-[19px] h-[19px]" />
            </a>
            <a href="#" className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[#002F6C] text-white">
              <RiTwitterFill className="w-[19px] h-[19px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
